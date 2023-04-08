export interface ILocal {
  name: string;
  cep: string;
  number: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  id: string;
  company_id: string;
}

export interface ICreateLocal {
  name: string;
  cep: string;
  number: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  company_id: string;
}

export interface IEditLocal {
  id: string;
  name: string;
  cep: string;
  number: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  company_id?: string;
}

export interface IListResponse<T> {
  page: number;
  limit: number;
  total: number;
  results: T[];
}

export interface IQueryLocals {
  page: number;
  limit: number;
  company_id: string;
}

export interface IDeleteLocal {
  id: string;
  company_id: string;
}

export interface ISetNavigateId {
  company_id: string;
}
export interface ISetNavigateName {
  companyName: string;
}

export interface IGetAllPayload {
  results: ILocal[];
  page: number;
  limit: number;
  total: number;
}

export interface ILocalState {
  list: {
    results: ILocal[];
    page: number;
    limit: number;
    total: number;
  };
  navigate: {
    company_id: string;
    companyName: string;
  };

  local: ILocal;
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

export interface IOpenEditDialogLocal {
  id: string;
  title: string;
}

export interface IOpenDeleteDialogLocal {
  id: string;
  itemName: string;
}
