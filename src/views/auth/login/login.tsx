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
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import avatarImg from "assets/images/undraw_male_avatar.svg";
import { useAppDispatch } from "hooks";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/auth";
import { setCredentials } from "../store";

export default function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const [showPassword, setShowPassword] = useState(false);

  let state = location.state as { from: Location };
  let from = state ? state.from.pathname : "/app/dashboard";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    try {
      const user = await login({ username, password: "demo" }).unwrap();
      dispatch(setCredentials(user));
      navigate(from, { replace: true });
    } catch (err) {
      //
    }
  }

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={false}
          md={8}
          sx={{
            backgroundImage: `url(${avatarImg})`,
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "center",
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
              onSubmit={handleSubmit}
            >
              <Stack alignItems="center" mt={4}>
                <Avatar src={avatarImg} sx={{ m: 1 }} />
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
              </Stack>
              <CardContent>
                <Stack alignItems="flex-start" justifyContent="center">
                  <TextField
                    fullWidth
                    id="login-email"
                    type="email"
                    label="Email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountCircle color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    id="login-password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
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
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={
                          <Typography variant="body1">Remember me</Typography>
                        }
                      />
                    </Grid>
                    <Grid item xs={false}>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
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
