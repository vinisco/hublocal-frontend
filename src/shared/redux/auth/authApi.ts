import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginInput } from '../../../pages/login/components/login-form/loginSchema';
import { userApi } from '../user/userApi';
import { apiFetchBase } from '../api/apiFetchBase';
import { logging, storeJwt } from './authSlice';
import { appNavigation } from '../../utilities/history';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: apiFetchBase,
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ access_token: string }, LoginInput>({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logging());
          dispatch(
            storeJwt({ token: (await queryFulfilled).data.access_token }),
          );
          sessionStorage.setItem(
            'TOKEN_KEY',
            (await queryFulfilled).data.access_token,
          );
          await dispatch(
            userApi.endpoints.show.initiate(
              (
                await queryFulfilled
              ).data.access_token,
            ),
          );
          appNavigation('/company');
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'auth/logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
