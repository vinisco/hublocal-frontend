import { createApi } from '@reduxjs/toolkit/dist/query/react';
import {
  getList,
  handleCloseDeleteDialogCompany,
  handleCloseDialogCompany,
  show,
} from './companySlice';
import { apiFetchBase } from '../api/apiFetchBase';
import {
  ICompany,
  IEditCompany,
  IListResponse,
  IQueryCompanies,
} from './companyTypes';
import { CompanyInput } from '../../../pages/company/components/company-form/companySchema';
import { toast } from 'react-toastify';

export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: apiFetchBase,
  tagTypes: ['Companies'],
  endpoints: (builder) => ({
    getCompanies: builder.mutation<IListResponse<ICompany>, IQueryCompanies>({
      query: (data) => {
        return {
          url: `companies?page=${data.page}&limit=${data.limit}`,
          credentials: 'include',
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(getList(data));
        } catch (error) {}
      },
    }),
    getAllCompanies: builder.query<IListResponse<ICompany>, IQueryCompanies>({
      query: (data) => {
        return {
          url: `companies?page=${data.page}&limit=${data.limit}`,
          credentials: 'include',
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(getList(data));
        } catch (error) {}
      },
    }),
    getCompany: builder.query<ICompany, string>({
      query(id) {
        return `companies/${id}`;
      },
      transformResponse: (
        response: { data: { company: ICompany } },
        args,
        meta,
      ) => response.data.company,
      providesTags: (result, error, id) => [{ type: 'Companies', id }],
    }),
    createCompany: builder.mutation<ICompany, CompanyInput>({
      query(data) {
        return {
          url: 'companies',
          method: 'POST',
          credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: [{ type: 'Companies', id: 'LIST' }],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            companyApi.endpoints.getCompanies.initiate({
              page: 1,
              limit: 5,
            }),
          );
          dispatch(handleCloseDialogCompany());
          toast.success('Empresa adicionada com sucesso');
        } catch (error) {}
      },
    }),
    editCompany: builder.mutation<ICompany, IEditCompany>({
      query({ id, ...values }) {
        return {
          url: `companies/${id}`,
          method: 'PATCH',
          credentials: 'include',
          body: values,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            companyApi.endpoints.getCompanies.initiate({
              page: 1,
              limit: 5,
            }),
          );
          dispatch(handleCloseDialogCompany());
          dispatch(show({ id: '', name: '', website: '', cnpj: '' }));
          toast.success('Empresa editada com sucesso');
        } catch (error) {}
      },
    }),
    deleteCompany: builder.mutation<null, string>({
      query(id) {
        return {
          url: `companies/${id}`,
          method: 'DELETE',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            companyApi.endpoints.getCompanies.initiate({
              page: 1,
              limit: 5,
            }),
          );
          dispatch(handleCloseDeleteDialogCompany());
          toast.success('Empresa excluída com sucesso');
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useCreateCompanyMutation,
  useEditCompanyMutation,
  useDeleteCompanyMutation,
  useGetCompaniesMutation,
  useGetAllCompaniesQuery,
  useGetCompanyQuery,
  usePrefetch,
} = companyApi;
