import AuthLayout from "layouts/AuthLayout";
import UserLayout from "layouts/UserLayout";
import { useAuth } from "views/auth/login/context";

const Layout = () => {
  const { user } = useAuth();

  if (user === null) return <AuthLayout />;

  return <UserLayout />;
};

export default Layout;
