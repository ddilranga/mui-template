import { TextInput, TextInputProps } from "@mantine/core";
import { useController, UseControllerProps } from "react-hook-form";

type ControlledTextFieldProps<T> = UseControllerProps<T> & TextInputProps;

function ControlledTextField<T>(props: ControlledTextFieldProps<T>) {
  const {
    field: { name, onChange, onBlur, ref, value },
    fieldState: { error },
  } = useController(props);

  return (
    <TextInput
      {...props}
      error={error && error.message}
      name={name}
      value={value as TextInputProps["value"]}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
    />
  );
}

export default ControlledTextField;
