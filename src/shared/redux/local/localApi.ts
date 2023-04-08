import { createApi } from '@reduxjs/toolkit/dist/query/react';
import {
  getList,
  handleCloseDeleteDialogLocal,
  handleCloseDialogLocal,
  show,
} from './localSlice';
import { apiFetchBase } from '../api/apiFetchBase';
import {
  ILocal,
  IEditLocal,
  IListResponse,
  IQueryLocals,
  IDeleteLocal,
  ICreateLocal,
} from './localTypes';
import { toast } from 'react-toastify';

export const localApi = createApi({
  reducerPath: 'localApi',
  baseQuery: apiFetchBase,
  tagTypes: ['Locals'],
  endpoints: (builder) => ({
    getLocals: builder.mutation<IListResponse<ILocal>, IQueryLocals>({
      query: (data) => {
        return {
          url: `locals?page=${data.page}&limit=${data.limit}&company_id=${data.company_id}`,
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
    getAllLocals: builder.query<IListResponse<ILocal>, IQueryLocals>({
      query: (data) => {
        return {
          url: `locals?page=${data.page}&limit=${data.limit}&company_id=${data.company_id}`,
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
    getLocal: builder.query<ILocal, string>({
      query(id) {
        return `locals/${id}`;
      },
      transformResponse: (response: { data: { local: ILocal } }, args, meta) =>
        response.data.local,
      providesTags: (result, error, id) => [{ type: 'Locals', id }],
    }),
    createLocal: builder.mutation<ILocal, ICreateLocal>({
      query(data) {
        return {
          url: 'locals',
          method: 'POST',
          credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: [{ type: 'Locals', id: 'LIST' }],
      async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(
            localApi.endpoints.getLocals.initiate({
              page: 1,
              limit: 5,
              company_id: data.company_id,
            }),
          );
          dispatch(handleCloseDialogLocal());
          toast.success('Local adicionado com sucesso');
        } catch (error) {}
      },
    }),
    editLocal: builder.mutation<ILocal, IEditLocal>({
      query({ id, ...values }) {
        return {
          url: `locals/${id}`,
          method: 'PATCH',
          credentials: 'include',
          body: values,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(
            localApi.endpoints.getLocals.initiate({
              page: 1,
              limit: 5,
              company_id: data.company_id,
            }),
          );
          dispatch(handleCloseDialogLocal());
          dispatch(show({ id: '', name: '', website: '', cnpj: '' }));
          toast.success('Local editado com sucesso');
        } catch (error) {}
      },
    }),
    deleteLocal: builder.mutation<null, IDeleteLocal>({
      query(value) {
        return {
          url: `locals/${value.id}`,
          method: 'DELETE',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled, getState }) {
        try {
          await queryFulfilled;

          await dispatch(
            localApi.endpoints.getLocals.initiate({
              page: 1,
              limit: 5,
              company_id: args.company_id,
            }),
          );
          dispatch(handleCloseDeleteDialogLocal());
          toast.success('Local excluída com sucesso');
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useCreateLocalMutation,
  useEditLocalMutation,
  useDeleteLocalMutation,
  useGetLocalsMutation,
  useGetAllLocalsQuery,
  useGetLocalQuery,
  usePrefetch,
} = localApi;
