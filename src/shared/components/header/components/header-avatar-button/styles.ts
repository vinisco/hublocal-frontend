import { ArrowDropDown } from '@mui/icons-material';
import { Avatar, Button, styled } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  width: ${(theme) => theme.theme.spacing(6)};
  height: ${(theme) => theme.theme.spacing(6)};
  margin-left: ${(theme) => theme.theme.spacing(1)};
  margin-right: ${(theme) => theme.theme.spacing(0)};
  background-color: ${(theme) => theme.theme.palette.primary.main};
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
  text-transform: none;
  box-shadow: none;
  border-radius: 0;
  min-width: ${(theme) => theme.theme.spacing(31.25)};
  font-size: ${(theme) => theme.theme.spacing(2.5)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledArrowDropDown = styled(ArrowDropDown)`
  margin-left: ${(theme) => theme.theme.spacing(1)};
  margin-right: ${(theme) => theme.theme.spacing(1)};
`;
