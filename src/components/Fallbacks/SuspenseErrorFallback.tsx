import { Box, Button, Stack, Text, Title } from "@mantine/core";
import InjuredSvg from "assets/images/undraw_bug_fixing.svg";
import { FallbackProps } from "react-error-boundary";

const SuspenseErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Stack>
      <Title order={4} align="center">
        Something went wrong:
      </Title>
      <Box component="img" src={InjuredSvg} sx={{ maxHeight: "50vh" }} />
      <Text component="p" align={"center"}>
        {error.message}
      </Text>
      <Stack align={"center"}>
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
