import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import {
  StyledHeaderTitle,
  StyledTitleContainer,
  StyledButtonClose,
  StyledButtonContainer,
  StyledButton,
  StyledDeleteMessage,
  StyleDeleteContainer,
} from './styles';
import { Close } from '@mui/icons-material';

interface IDeleteDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  deleteFunction: (value: string) => void;
  text?: string;
  itemName?: string;
  itemType?: string;
  id: string;
}

export const DeleteDialog: React.FC<IDeleteDialogProps> = ({
  open = true,
  setOpen,
  text,
  itemType,
  itemName,
  id,
  deleteFunction,
}) => {
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteFunction(id);
    setOpen(false);
  };

  return (
    <Dialog
      PaperProps={{ sx: { borderRadius: '10px !important' } }}
      open={open}
      onClose={handleClose}
      fullWidth
    >
      {!!id && (
        <Grid container>
          <Grid item xs={12} md={12} height={theme.spacing(7.5)}>
            <StyledTitleContainer>
              <StyledHeaderTitle>Confirmação de exclusão</StyledHeaderTitle>
              <StyledButtonClose onClick={() => handleClose()}>
                <Close />
              </StyledButtonClose>
            </StyledTitleContainer>
          </Grid>
          <StyleDeleteContainer>
            <StyledDeleteMessage>
              {itemType}
              <strong> {itemName} </strong>
              {text}
            </StyledDeleteMessage>
          </StyleDeleteContainer>
          <StyledButtonContainer>
            <StyledButton
              onClick={() => handleDelete()}
              color="error"
              variant="contained"
            >
              Excluir
            </StyledButton>
          </StyledButtonContainer>
        </Grid>
      )}
    </Dialog>
  );
};
