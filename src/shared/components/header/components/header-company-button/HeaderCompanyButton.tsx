import { Box } from '@mui/material';
import {
  StyledCompanyName,
  StyledDomainIcon,
  StyledHeaderNameContainer,
} from './styles';
import { useAppSelector } from '../../../../hooks';

export const HeaderCompanyButton: React.FC = () => {
  const { companyName } = useAppSelector((state) => state.localState.navigate);

  return (
    <Box display={{ xs: 'none', md: 'flex' }}>
      <StyledHeaderNameContainer>
        <StyledDomainIcon />
      </StyledHeaderNameContainer>
      <StyledHeaderNameContainer>
        <StyledCompanyName>
          {!!companyName ? companyName : 'Minhas empresas'}
        </StyledCompanyName>
      </StyledHeaderNameContainer>
    </Box>
  );
};
