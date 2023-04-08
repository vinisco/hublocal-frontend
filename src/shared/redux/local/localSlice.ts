import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ILocalState,
  IGetAllPayload,
  IOpenDeleteDialogLocal,
  IOpenEditDialogLocal,
  ISetNavigateId,
  ISetNavigateName,
} from './localTypes';

const initialState: ILocalState = {
  list: {
    results: [],
    page: 1,
    limit: 5,
    total: 0,
  },
  navigate: {
    company_id: '',
    companyName: '',
  },
  local: {
    name: '',
    cep: '',
    number: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    id: '',
    company_id: '',
  },
  dialog: {
    openDialog: false,
    id: '',
    isNew: true,
    title: 'Adicionar local',
  },
  deleteDialog: {
    openDeleteDialog: false,
    id: '',
    text: 'será excluído. Tem certeza dessa ação?',
    itemType: 'O local',
    itemName: '',
  },
};

export const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    show: (state, action) => {
      state.local = action.payload;
    },
    getList: (state, action: PayloadAction<IGetAllPayload>) => {
      state.list = action.payload;
    },
    create: (state, action) => {
      state.local = action.payload;
    },
    edit: (state, action) => {
      state.local = action.payload;
    },
    handleOpenNewDialogLocal: (state) => {
      state.dialog.openDialog = !state.dialog.openDialog;
      state.dialog.isNew = true;
      state.dialog.title = 'Adicionar local';
    },
    handleCloseDialogLocal: (state) => {
      state.dialog = initialState.dialog;
    },
    handleOpenEditDialogLocal: (
      state,
      action: PayloadAction<IOpenEditDialogLocal>,
    ) => {
      state.dialog.openDialog = !state.dialog.openDialog;
      state.dialog.isNew = false;
      state.dialog.id = action.payload.id;
      state.dialog.title = action.payload.title;
    },
    handleOpenDeleteDialogLocal: (
      state,
      action: PayloadAction<IOpenDeleteDialogLocal>,
    ) => {
      state.deleteDialog.openDeleteDialog =
        !state.deleteDialog.openDeleteDialog;
      state.deleteDialog.id = action.payload.id;
      state.deleteDialog.itemName = action.payload.itemName;
    },
    handleCloseDeleteDialogLocal: (state) => {
      state.deleteDialog = initialState.deleteDialog;
    },
    setNavigate: (state, payload: PayloadAction<ISetNavigateId>) => {
      state.navigate.company_id = payload.payload.company_id;
    },
    setCompanyName: (state, payload: PayloadAction<ISetNavigateName>) => {
      state.navigate.companyName = payload.payload.companyName;
    },
  },
});

export const {
  show,
  getList,
  create,
  edit,
  handleOpenNewDialogLocal,
  handleOpenEditDialogLocal,
  handleCloseDialogLocal,
  handleOpenDeleteDialogLocal,
  handleCloseDeleteDialogLocal,
  setNavigate,
  setCompanyName,
} = localSlice.actions;
export const localReducer = localSlice.reducer;
