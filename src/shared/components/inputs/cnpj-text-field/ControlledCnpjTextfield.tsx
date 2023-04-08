import { TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledTextField } from './styles';
import InputMask from 'react-input-mask';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

const TextMaskCustom = (props: any) => {
  const { inputRef, ...other } = props;

  return <InputMask {...other} ref={inputRef} mask="99.999.999/9999-99" />;
};

export const ControlledCnpjTextfield: React.FC<IFormInputProps> = ({
  name,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  let errorsMessage = String(
    errors[name]
      ? errors[name]?.message === 'Required'
        ? 'Campo obrigatório'
        : errors[name]?.message
      : '',
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <StyledTextField
          fullWidth
          InputLabelProps={{
            shrink: false,
          }}
          {...otherProps}
          error={!!errors[name]}
          helperText={errorsMessage}
          {...field}
          InputProps={{
            inputComponent: TextMaskCustom,
          }}
          size="small"
        />
      )}
    />
  );
};
