import { AppShell, Box, Button, useMantineTheme } from "@mantine/core";
import { SuspenseErrorFallback } from "components/Fallbacks";
import ScrollToTop from "components/ScrollToTop";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { ArrowUp } from "tabler-icons-react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

const UserLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.background[3],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      header={<Toolbar opened={opened} setOpened={setOpened} />}
      navbar={<Sidebar opened={opened} />}
    >
      <Box id="scrollTo" />

      <ErrorBoundary FallbackComponent={SuspenseErrorFallback}>
        <Suspense fallback={<>loading...</>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>

      <ScrollToTop target="#scrollTo">
        <Button leftIcon={<ArrowUp />}>Scroll to top</Button>
      </ScrollToTop>
    </AppShell>
  );
};

export default UserLayout;
