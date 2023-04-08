import { BaseLoggedPage } from '../../shared/layouts';
import { Grid } from '@mui/material';
import {
  StyledArrowContainer,
  StyledArrowLink,
  StyledArrowText,
  StyledButton,
} from './styles';
import { LocalTable } from './components/local-table/LocalTable';
import React from 'react';
import { useAppSelector } from '../../shared/hooks';
import { LocalEmpty } from './components/local-empty/LocalEmpty';
import { useGetAllLocalsQuery } from '../../shared/redux/local/localApi';
import {
  handleOpenNewDialogLocal,
  setNavigate,
} from '../../shared/redux/local/localSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FullScreenLoader } from '../../shared/components/loader/FullScreenLoader';
import { ArrowBack } from '@mui/icons-material';

export const LocalPage: React.FC = () => {
  const { list } = useAppSelector((state) => state.localState);

  let { company_id } = useParams();

  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(handleOpenNewDialogLocal());
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/company');
  };

  React.useEffect(() => {
    if (typeof company_id === 'string') {
      dispatch(setNavigate({ company_id }));
    }
    //eslint-disable-next-line
  }, [company_id]);

  const { results } = list;

  const { isLoading } = useGetAllLocalsQuery(
    {
      page: 1,
      limit: 5,
      company_id: company_id ?? '',
    },
    { refetchOnMountOrArgChange: true },
  );

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <BaseLoggedPage>
      <Grid container>
        <StyledArrowContainer>
          <StyledArrowLink onClick={handleGoBack}>
            <ArrowBack />
            <StyledArrowText>Minhas empresas</StyledArrowText>
          </StyledArrowLink>
        </StyledArrowContainer>

        {results.length === 0 ? (
          <LocalEmpty />
        ) : (
          <>
            <Grid item xs={12} md={12} display="flex" justifyContent="flex-end">
              <StyledButton
                onClick={handleOpenDialog}
                color="primary"
                variant={'contained'}
              >
                Adicionar Local
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={12}>
              <LocalTable />
            </Grid>
          </>
        )}
      </Grid>
    </BaseLoggedPage>
  );
};
