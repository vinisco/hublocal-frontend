import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, TableHead } from '@mui/material';
import {
  StyledIconButton,
  StyledPageContainer,
  StyledPageNumber,
  StyledPageText,
  StyledPaginationContainer,
  StyledTableCard,
} from './styles';
import { Delete, Edit } from '@mui/icons-material';
import { DeleteDialog, InputDialog } from '../../../../shared/components';
import { LocalForm } from '../local-form/LocalForm';
import { useAppSelector } from '../../../../shared/hooks';
import { useDispatch } from 'react-redux';
import {
  useDeleteLocalMutation,
  useGetLocalsMutation,
} from '../../../../shared/redux/local/localApi';
import {
  handleCloseDeleteDialogLocal,
  handleCloseDialogLocal,
  handleOpenDeleteDialogLocal,
  handleOpenEditDialogLocal,
  show,
} from '../../../../shared/redux/local/localSlice';
import { useParams } from 'react-router-dom';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, onPageChange } = props;

  const { list } = useAppSelector((state) => state.localState);

  const { page, limit: rowsPerPage } = list;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      {theme.direction === 'rtl' ? (
        <Button
          variant="contained"
          onClick={handleBackButtonClick}
          disabled={page === 0}
        >
          Próxima
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={handleBackButtonClick}
          disabled={page === 1}
        >
          Anterior
        </Button>
      )}

      {theme.direction === 'rtl' ? (
        <Button
          variant="contained"
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage)}
        >
          Anterior
        </Button>
      ) : (
        <Button
          sx={{ marginLeft: '10px', marginRight: '10px' }}
          variant="contained"
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage)}
        >
          Próxima
        </Button>
      )}
    </Box>
  );
}

interface IInputLocalTableProps {
  children?: React.ReactNode;
}

export const LocalTable: React.FC<IInputLocalTableProps> = () => {
  const [getLocal] = useGetLocalsMutation();

  const { list, dialog, deleteDialog } = useAppSelector(
    (state) => state.localState,
  );
  const { openDialog, title } = dialog;
  const {
    openDeleteDialog,
    id: deleteId,
    itemName,
    itemType,
    text,
  } = deleteDialog;
  const dispatch = useDispatch();

  let { company_id } = useParams();

  const { page, limit: rowsPerPage, results, total } = list;

  const [DeleteLocal] = useDeleteLocalMutation();

  const handleDeleteLocal = (id: string) => {
    DeleteLocal({ id, company_id: company_id ?? '' });
  };

  const handleCloseDeleteDialog = () => {
    dispatch(handleCloseDeleteDialogLocal());
  };

  const handleCloseDialog = (): void => {
    dispatch(handleCloseDialogLocal());
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    getLocal({
      page: newPage,
      limit: rowsPerPage,
      company_id: company_id ?? '',
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    getLocal({
      page,
      limit: Number(event.target.value),
      company_id: company_id ?? '',
    });
  };

  return (
    <>
      <StyledTableCard>
        <TableContainer>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Local</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row) => {
                const handleOpenEditDialog = (): void => {
                  dispatch(show(row));
                  dispatch(
                    handleOpenEditDialogLocal({
                      id: row.id,
                      title: `Editar: ${row.name}`,
                    }),
                  );
                };

                const handleOpenDeleteDialog = (): void => {
                  dispatch(
                    handleOpenDeleteDialogLocal({
                      id: row.id,
                      itemName: row.name,
                    }),
                  );
                };

                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell style={{ width: '20%' }} align="left">
                      <StyledIconButton onClick={handleOpenEditDialog}>
                        <Edit sx={{ fill: 'black' }} />
                      </StyledIconButton>
                      <StyledIconButton onClick={handleOpenDeleteDialog}>
                        <Delete sx={{ fill: 'red' }} />
                      </StyledIconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <StyledPaginationContainer>
          <StyledPageContainer>
            <StyledPageText>Página:</StyledPageText>
            <StyledPageNumber>{page}</StyledPageNumber>
          </StyledPageContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            colSpan={3}
            count={total}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage={'Qt por página:'}
            page={page - 1}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },

              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </StyledPaginationContainer>
      </StyledTableCard>

      <InputDialog title={title} open={openDialog} setOpen={handleCloseDialog}>
        <LocalForm />
      </InputDialog>
      <DeleteDialog
        open={openDeleteDialog}
        setOpen={handleCloseDeleteDialog}
        deleteFunction={handleDeleteLocal}
        id={deleteId}
        itemName={itemName}
        itemType={itemType}
        text={text}
      />
    </>
  );
};
