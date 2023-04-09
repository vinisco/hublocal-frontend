import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';
import { errorMessageHandler } from './errorHandling';
import { appNavigation } from '../../utilities/history';

interface ApiResponseError {
  message: string;
}

export const apiFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseUrl = `https://api.startcoding.com.br/`;

  const token = sessionStorage.getItem('TOKEN_KEY');

  const baseQuery = fetchBaseQuery({
    baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 401) {
      appNavigation('/home');
    }

    if (result.error.status === 403) {
      appNavigation('/home');
    }

    let error = result.error.data as ApiResponseError;
    toast.error(errorMessageHandler(error?.message ?? ''));
  }
  return result;
};
