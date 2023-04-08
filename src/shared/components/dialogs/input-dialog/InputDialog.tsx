import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import {
  StyledHeaderTitle,
  StyledTitleContainer,
  StyledButtonClose,
} from './styles';
import { Close } from '@mui/icons-material';

interface IInputDialogProps {
  children?: React.ReactNode;
  open: boolean;
  setOpen: () => void;
  title?: string;
}

export const InputDialog: React.FC<IInputDialogProps> = ({
  children,
  open = true,
  setOpen,
  title = 'Adicionar',
}) => {
  const theme = useTheme();

  const handleClose = () => {
    setOpen();
  };

  return (
    <Dialog
      PaperProps={{ sx: { borderRadius: '10px !important' } }}
      open={open}
      onClose={handleClose}
      fullWidth
    >
      <Grid container>
        <Grid item xs={12} md={12} height={theme.spacing(7.5)}>
          <StyledTitleContainer>
            <StyledHeaderTitle>{title}</StyledHeaderTitle>
            <StyledButtonClose onClick={() => handleClose()}>
              <Close />
            </StyledButtonClose>
          </StyledTitleContainer>
        </Grid>
        {children}
      </Grid>
    </Dialog>
  );
};
