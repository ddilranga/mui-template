import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import InjuredSvg from "assets/images/undraw_bug_fixing.svg";
import { FallbackProps } from "react-error-boundary";

const SuspenseErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Stack>
      <Box component="p" typography={"h4"} textAlign={"center"}>
        Something went wrong:
      </Box>
      <Box component="img" src={InjuredSvg} maxHeight={"50vh"} />
      <Box
        component="p"
        sx={{ typography: "subtitle1", my: 2 }}
        textAlign={"center"}
      >
        {error.message}
      </Box>
      <Stack alignItems={"center"}>
        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload the page
        </Button>
      </Stack>
    </Stack>
  );
};

export default SuspenseErrorFallback;
