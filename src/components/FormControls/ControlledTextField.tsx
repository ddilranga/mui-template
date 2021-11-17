import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type ControlledTextFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
} & TextFieldProps;

const ControlledTextField = <T extends FieldValues>(
  props: ControlledTextFieldProps<T>
) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={Boolean(error)}
          helperText={error && error.message}
        />
      )}
    />
  );
};

export default ControlledTextField;
