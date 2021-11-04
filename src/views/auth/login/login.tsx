import { Login as LoginIcon } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/auth";
import { useAppDispatch } from "store";
import { setCredentials } from "../store";

export default function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

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
    <Paper>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <LoadingButton
          loading={isLoading}
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<LoginIcon />}
        >
          Login
        </LoadingButton>
      </form>
    </Paper>
  );
}
