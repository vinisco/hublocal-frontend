import { BaseLoggedPage } from '../../shared/layouts';
import { Grid } from '@mui/material';
import { StyledButton } from './styles';
import { CompanyTable } from './components/company-table/CompanyTable';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../shared/hooks';
import { CompanyEmpty } from './components/company-empty/CompanyEmpty';
import { useGetAllCompaniesQuery } from '../../shared/redux/company/companyApi';
import { handleOpenNewDialogCompany } from '../../shared/redux/company/companySlice';
import { useDispatch } from 'react-redux';
import { FullScreenLoader } from '../../shared/components/loader/FullScreenLoader';
import { setCompanyName } from '../../shared/redux/local/localSlice';

export const CompanyPage: React.FC = () => {
  const { list } = useAppSelector((state) => state.companyState);

  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(handleOpenNewDialogCompany());
  };

  const { results } = list;

  const { isLoading } = useGetAllCompaniesQuery(
    { page: 1, limit: 5 },
    { refetchOnMountOrArgChange: true },
  );

  useEffect(() => {
    dispatch(setCompanyName({ companyName: '' }));
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <BaseLoggedPage>
      <Grid container>
        {results.length === 0 ? (
          <CompanyEmpty />
        ) : (
          <>
            <Grid item xs={12} md={12} display="flex" justifyContent="flex-end">
              <StyledButton
                onClick={handleOpenDialog}
                color="primary"
                variant={'contained'}
              >
                Adicionar Empresa
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={12}>
              <CompanyTable />
            </Grid>
          </>
        )}
      </Grid>
    </BaseLoggedPage>
  );
};
