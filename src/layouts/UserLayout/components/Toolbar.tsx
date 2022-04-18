import {
  Avatar,
  Box,
  Burger,
  Group,
  Header,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import avatar from "assets/images/avatar_placeholder.png";
import ThemeToggle from "layouts/shared/components/ThemeToggle";

interface ToolbarProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toolbar = ({ opened, setOpened }: ToolbarProps) => {
  const theme = useMantineTheme();

  return (
    <Header height={60} p="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.secondary[6]}
            mr="xl"
          />
        </MediaQuery>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Title
            order={2}
            sx={(theme) => ({
              color: theme.colors.info[7],
              "&:hover": {
                color: theme.colors.info[8],
              },
            })}
          >
            Mantine Template
          </Title>

          <Group position="right" align="center">
            <ThemeToggle />
            <Avatar src={avatar} />
          </Group>
        </Box>
      </Box>
    </Header>
  );
};

export default Toolbar;
