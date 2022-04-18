import { Checkbox, CheckboxProps, createStyles, Text } from "@mantine/core";
import { useController, UseControllerProps } from "react-hook-form";

const useStyles = createStyles((theme) => ({
  error: {
    marginTop: theme.spacing.xs / 2,
    wordBreak: "break-word",
    color: theme.colors.red[6],
  },
}));

type ControlledCheckboxProps<T> = UseControllerProps<T> & CheckboxProps;

function ControlledCheckbox<T>(props: ControlledCheckboxProps<T>) {
  const { classes } = useStyles();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(props);

  return (
    <>
      <Checkbox
        {...props}
        checked={value as boolean}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
      {!!error && <Text className={classes.error}>{error.message}</Text>}
    </>
  );
}

export default ControlledCheckbox;
