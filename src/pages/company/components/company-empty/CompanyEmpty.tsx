import { useDispatch } from 'react-redux';

import {
  StyledAddCompanyButton,
  StyledContainer,
  StyledEmptyMessage,
  StyledGrid,
} from './styles';
import { InputDialog } from '../../../../shared/components';
import { useAppSelector } from '../../../../shared/hooks';
import { CompanyForm } from '../company-form/CompanyForm';
import { handleOpenNewDialogCompany } from '../../../../shared/redux/company/companySlice';

export const CompanyEmpty: React.FC = () => {
  const dispatch = useDispatch();

  const { openDialog } = useAppSelector((state) => state.companyState.dialog);

  const handleOpenDialog = () => {
    dispatch(handleOpenNewDialogCompany());
  };

  return (
    <StyledGrid
      item
      xs={12}
      md={12}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <StyledContainer>
        <StyledEmptyMessage>Nenhuma empresa</StyledEmptyMessage>
        <StyledEmptyMessage>cadastrada!</StyledEmptyMessage>
        <StyledAddCompanyButton onClick={handleOpenDialog} variant="contained">
          Adicionar Empresa
        </StyledAddCompanyButton>
      </StyledContainer>

      <InputDialog
        title="Adicionar empresa"
        open={openDialog}
        setOpen={handleOpenDialog}
      >
        <CompanyForm />
      </InputDialog>
    </StyledGrid>
  );
};
