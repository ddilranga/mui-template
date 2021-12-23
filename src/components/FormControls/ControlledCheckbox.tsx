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

function ControlledCheckbox<T>(props: ControlledCheckboxProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(props);

  return (
    <>
      <FormControlLabel
        {...props.labelProps}
        control={
          <Checkbox
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        }
      />
      <FormHelperText error={!!error}>{error && error.message}</FormHelperText>
    </>
  );
}

export default ControlledCheckbox;
