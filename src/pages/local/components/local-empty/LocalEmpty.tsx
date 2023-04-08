import React from 'react';
import { useDispatch } from 'react-redux';

import {
  StyledAddLocalButton,
  StyledContainer,
  StyledEmptyMessage,
  StyledGrid,
} from './styles';
import { InputDialog } from '../../../../shared/components';
import { useAppSelector } from '../../../../shared/hooks';
import { LocalForm } from '../local-form/LocalForm';
import { handleOpenNewDialogLocal } from '../../../../shared/redux/local/localSlice';

export const LocalEmpty: React.FC = () => {
  const dispatch = useDispatch();

  const { openDialog } = useAppSelector((state) => state.localState.dialog);

  const handleOpenDialog = () => {
    dispatch(handleOpenNewDialogLocal());
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
        <StyledEmptyMessage>Nenhum local</StyledEmptyMessage>
        <StyledEmptyMessage>cadastrado!</StyledEmptyMessage>
        <StyledAddLocalButton onClick={handleOpenDialog} variant="contained">
          Adicionar Local
        </StyledAddLocalButton>
      </StyledContainer>
      <InputDialog
        title="Adicionar local"
        open={openDialog}
        setOpen={handleOpenDialog}
      >
        <LocalForm />
      </InputDialog>
    </StyledGrid>
  );
};
