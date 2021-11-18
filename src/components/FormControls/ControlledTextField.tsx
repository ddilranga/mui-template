import { TextField, TextFieldProps } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type ControlledTextFieldProps<T> = UseControllerProps<T> & TextFieldProps;

const ControlledTextField = <T extends {}>(
  props: ControlledTextFieldProps<T>
) => {
  const {
    field: { name, onChange, onBlur, ref, value },
    fieldState: { error },
  } = useController(props);

  return (
    <TextField
      {...props}
      error={!!error}
      helperText={error && error.message}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  );
};

export default ControlledTextField;
