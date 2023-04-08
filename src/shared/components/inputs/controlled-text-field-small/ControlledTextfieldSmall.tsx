import { TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledTextField } from './styles';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

export const ControlledTextfieldSmall: React.FC<IFormInputProps> = ({
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
          {...field}
          error={!!errors[name]}
          helperText={errorsMessage}
        />
      )}
    />
  );
};
