import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Group,
  PasswordInput,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
  Center,
} from "@mantine/core";
import avatarImg from "assets/images/undraw_male_avatar.svg";
import {
  ControlledCheckbox,
  ControlledTextField,
} from "components/FormControls";
import { useAuth } from "hooks";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/auth";
import { At, DoorEnter } from "tabler-icons-react";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().required().email().default(""),
  password: yup.string().required().min(8).default(""),
  rememberMe: yup.bool().required().default(false),
});

type FormValues = yup.InferType<typeof loginSchema>;

const defaultValues = loginSchema.cast({});

export default function LoginPage() {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const [loginReq, { isLoading }] = useLoginMutation();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSubmit(
      async (data) => {
        try {
          const { user, token } = await loginReq({
            username: data.email,
            password: data.password,
          }).unwrap();

          login(user, token, data.rememberMe);

          const state = location.state as { from: Location };
          const from = state ? state.from.pathname : "/app/dashboard";

          navigate(from, { replace: true });
        } catch (err) {
          //
        }
      },
      () => {
        //
      }
    )();
  };

  return (
    <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}>
      <Grid>
        <Grid.Col xs={12}>
          <Card shadow={"md"} p="lg">
            <Card.Section>
              <Stack align="center" mt={4}>
                <Avatar src={avatarImg} />
                <Title order={3}>Login</Title>
              </Stack>
            </Card.Section>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
            >
              <Stack align="flex-start" justify="center">
                <ControlledTextField<FormValues>
                  control={control}
                  name="email"
                  id="login-email"
                  label="Email"
                  type="email"
                  styles={{
                    root: {
                      width: "100%",
                    },
                  }}
                  icon={
                    <ThemeIcon color="primary">
                      <At />
                    </ThemeIcon>
                  }
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ field, fieldState }) => (
                    <PasswordInput
                      label="Password"
                      value={field.value}
                      onChange={(event) =>
                        field.onChange(event.currentTarget.value)
                      }
                      error={fieldState.error?.message}
                      styles={{
                        root: {
                          width: "100%",
                        },
                      }}
                    />
                  )}
                />
              </Stack>

              <Group align="center" position="apart" my={12}>
                <ControlledCheckbox<FormValues>
                  control={control}
                  name="rememberMe"
                  label="Remember me"
                />

                <Text size={"sm"} variant="link" component="a" href="#">
                  Forgot password?
                </Text>
              </Group>

              <Button
                fullWidth
                radius="sm"
                loading={isLoading}
                type="submit"
                color="primary"
                leftIcon={<DoorEnter />}
              >
                Login
              </Button>
            </Box>

            <Text
              variant="link"
              component="a"
              href="#"
              mt={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Don&apos;t have an account? Sign Up
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
