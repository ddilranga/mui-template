import { yupResolver } from "@hookform/resolvers/yup";
import {
  AccountCircle,
  Login as LoginIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import authenticationSvg from "assets/images/Authentication_Isometric.svg";
import avatarImg from "assets/images/undraw_male_avatar.svg";
import {
  ControlledCheckbox,
  ControlledTextField,
} from "components/FormControls";
import { useAuth } from "hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useLoginMutation } from "services/auth";
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

  const [loginReq, { isLoading }] = useLoginMutation();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

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
    <Container>
      <Grid container>
        <Grid
          item
          xs={false}
          md={8}
          sx={{
            backgroundImage: `url(${authenticationSvg})`,
            backgroundRepeat: "no-repeat",
            bgcolor: "#6863F2",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        />
        <Grid item xs={12} md={4}>
          <Card>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mt: 1 },
              }}
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
            >
              <Stack alignItems="center" mt={4}>
                <Avatar src={avatarImg} sx={{ m: 1 }} />
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
              </Stack>
              <CardContent>
                <Stack alignItems="flex-start" justifyContent="center">
                  <ControlledTextField<FormValues>
                    control={control}
                    name="email"
                    id="login-email"
                    label="Email"
                    type="email"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountCircle color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <ControlledTextField<FormValues>
                    control={control}
                    name="password"
                    id="login-password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="primary"
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <ControlledCheckbox<FormValues>
                    control={control}
                    name="rememberMe"
                    labelProps={{
                      label: (
                        <Typography variant="body1">Remember me</Typography>
                      ),
                    }}
                  />

                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Stack>
              </CardContent>

              <CardActions
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <LoadingButton
                  fullWidth
                  sx={{
                    borderRadius: 4,
                  }}
                  loading={isLoading}
                  type="submit"
                  color="primary"
                  variant="contained"
                  startIcon={<LoginIcon />}
                >
                  Login
                </LoadingButton>
                <Link href="#" variant="body2" sx={{ mt: 3 }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
