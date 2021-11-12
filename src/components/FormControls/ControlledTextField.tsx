import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type ControlledTextFieldProps = {
  name: string;
  control: Control<any>;
} & TextFieldProps;

const ControlledTextField = (props: ControlledTextFieldProps) => {
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
