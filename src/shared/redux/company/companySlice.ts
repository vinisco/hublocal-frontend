import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICompanyState,
  IGetAllPayload,
  IOpenDeleteDialogCompany,
  IOpenEditDialogCompany,
} from './companyTypes';

const initialState: ICompanyState = {
  list: {
    results: [],
    page: 1,
    limit: 5,
    total: 0,
  },
  company: {
    id: '',
    name: '',
    website: '',
    cnpj: '',
    locals: [],
  },
  dialog: {
    openDialog: false,
    id: '',
    isNew: true,
    title: 'Adicionar empresa',
  },
  deleteDialog: {
    openDeleteDialog: false,
    id: '',
    text: 'será excluída. Tem certeza dessa ação?',
    itemType: 'A empresa',
    itemName: '',
  },
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    show: (state, action) => {
      state.company = action.payload;
    },
    getList: (state, action: PayloadAction<IGetAllPayload>) => {
      state.list = action.payload;
    },
    create: (state, action) => {
      state.company = action.payload;
    },
    edit: (state, action) => {
      state.company = action.payload;
    },
    handleOpenNewDialogCompany: (state) => {
      state.dialog.openDialog = !state.dialog.openDialog;
      state.dialog.isNew = true;
      state.dialog.title = 'Adicionar empresa';
    },
    handleCloseDialogCompany: (state) => {
      state.dialog = initialState.dialog;
    },
    handleOpenEditDialogCompany: (
      state,
      action: PayloadAction<IOpenEditDialogCompany>,
    ) => {
      state.dialog.openDialog = !state.dialog.openDialog;
      state.dialog.isNew = false;
      state.dialog.id = action.payload.id;
      state.dialog.title = action.payload.title;
    },
    handleOpenDeleteDialogCompany: (
      state,
      action: PayloadAction<IOpenDeleteDialogCompany>,
    ) => {
      state.deleteDialog.openDeleteDialog =
        !state.deleteDialog.openDeleteDialog;
      state.deleteDialog.id = action.payload.id;
      state.deleteDialog.itemName = action.payload.itemName;
    },
    handleCloseDeleteDialogCompany: (state) => {
      state.deleteDialog = initialState.deleteDialog;
    },
  },
});

export const {
  show,
  getList,
  create,
  edit,
  handleOpenNewDialogCompany,
  handleOpenEditDialogCompany,
  handleCloseDialogCompany,
  handleOpenDeleteDialogCompany,
  handleCloseDeleteDialogCompany,
} = companySlice.actions;
export const companyReducer = companySlice.reducer;
