import DomainIcon from '@mui/icons-material/Domain';
import { styled } from '@mui/material';

export const StyledHeaderNameContainer = styled(`div`)`
  display: flex;
  align-items: center;
  max-width: 400px;
  height: 100%;
`;

export const StyledCompanyName = styled('h1')`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: ${(theme) => theme.theme.spacing(3.75)};
  line-height: ${(theme) => theme.theme.spacing(7)};
  margin-left: ${(theme) => theme.theme.spacing(2.5)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDomainIcon = styled(DomainIcon)`
  margin-left: ${(theme) => theme.theme.spacing(3)};
  width: ${(theme) => theme.theme.spacing(4)};
  height: ${(theme) => theme.theme.spacing(4)};
`;
