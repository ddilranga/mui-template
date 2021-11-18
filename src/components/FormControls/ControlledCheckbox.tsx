import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
} from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type ControlledCheckboxProps<T> = {
  labelProps: Omit<FormControlLabelProps, "control">;
} & UseControllerProps<T> &
  CheckboxProps;

const ControlledCheckbox = <T extends {}>(
  props: ControlledCheckboxProps<T>
) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <>
      <FormControlLabel
        {...props.labelProps}
        control={
          <Checkbox
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        }
      />
      <FormHelperText error={!!error}>{error && error.message}</FormHelperText>
    </>
  );
};

export default ControlledCheckbox;
