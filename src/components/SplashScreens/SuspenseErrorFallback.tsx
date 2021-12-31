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
      <Box
        component="img"
        src={InjuredSvg}
        // maxWidth={"25rem"}
        maxHeight={"50vh"}
      />
      <Box component="code" sx={{ typography: "subtitle1", my: 2 }}>
        {error.message}
      </Box>
      <Stack alignItems={"center"}>
        <Button
          onClick={() => {
            window.location.reload();
            // resetErrorBoundary();
          }}
        >
          Reload the page
        </Button>
      </Stack>
    </Stack>
  );
};

export default SuspenseErrorFallback;
