import { TextField, styled } from '@mui/material';
import { InputLoader } from '../../loader/InputLoader';

export const StyledTextField = styled(TextField)`


& .MuiFormLabel-root {
    font-size: ${(theme) => theme.theme.spacing(2)};
    font-weight: ${(theme) => theme.theme.spacing(2)}
    font-weight: 500;
    color: black;
    transform: translate(0, -${(theme) => theme.theme.spacing(3)});
    border-radius: 5px;
  }
  & .MuiFormLabel-root.Mui-focused {
    color: black;
  }

  & .MuiInputBase-root {
    font-size: ${(theme) => theme.theme.spacing(2)};
    font-weight: 500;
    min-height: ${(theme) => theme.theme.spacing(3.9)};
  }
  & .MuiInputBase-input.MuiInputBase-inputAdornedStart {
    padding: 10px 20px 10px 0;
  }
  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid ${(theme) => theme.theme.palette.primary.main};
  }
  & .Mui-error:after {
    border-bottom: 2px solid ${(theme) => theme.theme.palette.error.main};
  }
  & .MuiFormLabel-root.Mui-error {
    color: ${(theme) => theme.theme.palette.error.main};
  }
  & .MuiFormHelperText-root.Mui-error {
    color: ${(theme) => theme.theme.palette.error.main};
  }
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    min-height: ${(theme) => theme.theme.spacing(3.9)};
    border-width: ${(theme) => theme.theme.spacing(0.25)};
    border-bottom-color: ${(theme) => theme.theme.palette.primary.main};
    border-left-color: ${(theme) => theme.theme.palette.primary.main};
    border-right-color: ${(theme) => theme.theme.palette.primary.main};
    border-top-color: ${(theme) => theme.theme.palette.primary.main};
  }

  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-width: ${(theme) => theme.theme.spacing(0.25)};
    border-color: ${(theme) => theme.theme.palette.primary.dark};
  }


  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-width: ${(theme) => theme.theme.spacing(0.25)};
    border-color: ${(theme) => theme.theme.palette.primary.dark};
  }

`;
export const StyledLoader = styled(InputLoader)`
  margin-top: -14px !important;
`;
