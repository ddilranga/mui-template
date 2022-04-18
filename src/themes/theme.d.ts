import { Tuple } from "@mantine/core";

type CustomColors =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "error"
  | "background";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}
