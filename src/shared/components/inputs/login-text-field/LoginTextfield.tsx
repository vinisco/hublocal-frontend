import { InputAdornment } from '@mui/material';
import { StyledLoader, StyledTextField } from './styles';

enum UppercaseType {
  UPPERCASE = 'uppercase',
  NONE = 'none',
}

interface TextFieldProps {
  variant?: 'outlined' | 'filled' | 'standard';
  uppercase?: UppercaseType;
  margin?: 'none' | 'dense' | 'normal';
  error?: boolean;
  shrinked?: boolean;
  processing?: boolean;
  InputLabelProps?: any;
  InputProps?: any;
  helperText?: any;
  label: string;
  type: string;
}

export const LoginTextField: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  uppercase = UppercaseType.NONE,
  error = false,
  shrinked = false,
  processing = false,
  InputLabelProps = {},
  InputProps = {},
  helperText,
  label,
  ...other
}) => {
  const defaultInputProps = {
    notched: false,
  };

  if (processing) {
    InputProps.endAdornment = (
      <InputAdornment position="end">
        <StyledLoader />
      </InputAdornment>
    );
  }

  return (
    <StyledTextField
      InputLabelProps={{
        shrink: shrinked,
        ...InputLabelProps,
      }}
      error={error}
      variant={variant}
      fullWidth
      InputProps={{
        ...defaultInputProps,
        ...InputProps,
      }}
      inputProps={
        uppercase === UppercaseType.UPPERCASE
          ? { style: { textTransform: 'uppercase' } }
          : {}
      }
      helperText={helperText}
      {...other}
      label={label}
      size="small"
    />
  );
};
