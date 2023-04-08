export interface ICompany {
  id: string;
  name: string;
  website: string;
  cnpj: string;
  locals: [];
}

export interface IEditCompany {
  id: string;
  name: string;
  website: string;
  cnpj: string;
}

export interface IListResponse<T> {
  page: number;
  limit: number;
  total: number;
  results: T[];
}

export interface IQueryCompanies {
  page: number;
  limit: number;
}

export interface IGetAllPayload {
  results: ICompany[];
  page: number;
  limit: number;
  total: number;
}

export interface ICompanyState {
  list: {
    results: ICompany[];
    page: number;
    limit: number;
    total: number;
  };
  company: ICompany;
  dialog: {
    openDialog: boolean;
    id: string;
    isNew: boolean;
    title: string;
  };
  deleteDialog: {
    openDeleteDialog: boolean;
    id: string;
    text: string;
    itemType: string;
    itemName: string;
  };
}

export interface IOpenEditDialogCompany {
  id: string;
  title: string;
}

export interface IOpenDeleteDialogCompany {
  id: string;
  itemName: string;
}
