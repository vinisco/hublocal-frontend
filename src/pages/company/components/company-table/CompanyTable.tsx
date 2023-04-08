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
import image3 from '../../../../shared/images/image3.png';
import { DeleteDialog, InputDialog } from '../../../../shared/components';
import { CompanyForm } from '../company-form/CompanyForm';
import { useAppSelector } from '../../../../shared/hooks';
import { useDispatch } from 'react-redux';
import {
  useDeleteCompanyMutation,
  useGetCompaniesMutation,
} from '../../../../shared/redux/company/companyApi';
import {
  handleCloseDeleteDialogCompany,
  handleCloseDialogCompany,
  handleOpenDeleteDialogCompany,
  handleOpenEditDialogCompany,
  show,
} from '../../../../shared/redux/company/companySlice';
import { useNavigate } from 'react-router-dom';
import { setCompanyName } from '../../../../shared/redux/local/localSlice';

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

  const { list } = useAppSelector((state) => state.companyState);

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

interface IInputCompanyTableProps {
  children?: React.ReactNode;
}

export const CompanyTable: React.FC<IInputCompanyTableProps> = () => {
  const [getCompanies] = useGetCompaniesMutation();

  const { list, dialog, deleteDialog } = useAppSelector(
    (state) => state.companyState,
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

  const { page, limit: rowsPerPage, results, total } = list;

  const navigate = useNavigate();

  const [DeleteCompany] = useDeleteCompanyMutation();

  const handleDeleteCompany = (id: string) => {
    DeleteCompany(id);
  };

  const handleCloseDeleteDialog = () => {
    dispatch(handleCloseDeleteDialogCompany());
  };

  const handleCloseDialog = (): void => {
    dispatch(handleCloseDialogCompany());
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    getCompanies({ page: newPage, limit: rowsPerPage });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    getCompanies({ page, limit: Number(event.target.value) });
  };

  return (
    <>
      <StyledTableCard>
        <TableContainer>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Empresa</TableCell>
                <TableCell>Qt de Locais</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row) => {
                const handleOpenEditDialog = (): void => {
                  dispatch(show(row));
                  dispatch(
                    handleOpenEditDialogCompany({
                      id: row.id,
                      title: `Editar: ${row.name}`,
                    }),
                  );
                };

                const handleOpenDeleteDialog = (): void => {
                  dispatch(
                    handleOpenDeleteDialogCompany({
                      id: row.id,
                      itemName: row.name,
                    }),
                  );
                };

                const handleLocals = (): void => {
                  navigate(`/local/${row.id}`);
                  dispatch(setCompanyName({ companyName: row.name }));
                };

                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell style={{ width: '20%' }} align="left">
                      {row.locals.length}
                    </TableCell>
                    <TableCell style={{ width: '20%' }} align="left">
                      <StyledIconButton onClick={handleOpenEditDialog}>
                        <Edit sx={{ fill: 'black' }} />
                      </StyledIconButton>
                      <StyledIconButton onClick={handleLocals}>
                        <img src={image3} style={{ width: '75%' }} alt="icon" />
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
        <CompanyForm />
      </InputDialog>
      <DeleteDialog
        open={openDeleteDialog}
        setOpen={handleCloseDeleteDialog}
        deleteFunction={handleDeleteCompany}
        id={deleteId}
        itemName={itemName}
        itemType={itemType}
        text={text}
      />
    </>
  );
};
