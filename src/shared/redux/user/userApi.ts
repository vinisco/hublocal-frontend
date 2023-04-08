import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from './userSlice';
import { IUser } from './userTypes';
import { apiFetchBase } from '../api/apiFetchBase';
import { toast } from 'react-toastify';
import { SignUpInput } from '../../../pages/login/components/sign-up-form/signUpSchema';
import { authApi } from '../auth/authApi';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: apiFetchBase,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    show: builder.query<IUser, string>({
      query(access_token) {
        return {
          url: 'users/show',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    registerUser: builder.mutation<IUser, SignUpInput>({
      query(data) {
        return {
          url: 'users',
          method: 'POST',
          body: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          await dispatch(
            authApi.endpoints.loginUser.initiate({
              email: args.email,
              password: args.password,
            }),
          );
          toast.success('Usuário criado com sucesso');
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
