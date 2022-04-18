import { ActionIcon, ColorScheme } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "hooks";
import { Moon, Sun } from "tabler-icons-react";
import { selectThemeMode, setThemePaletteOptions } from "themes/store";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector(selectThemeMode);
  const isDarkMode = themeMode === "dark";

  const setThemeMode = () => {
    const colorScheme: ColorScheme = !isDarkMode ? "dark" : "light";

    dispatch(setThemePaletteOptions({ colorScheme }));
  };

  const Icon = isDarkMode ? Sun : Moon;

  return (
    <ActionIcon
      variant="outline"
      color={"secondary"}
      onClick={setThemeMode}
      title={isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    >
      {<Icon size={20} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
