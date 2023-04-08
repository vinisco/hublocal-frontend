import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserState {
  login: boolean;
  isLogged: boolean;
  token: string;
}

interface IStoreJWT {
  token: string;
}

const initialState: IUserState = {
  login: true,
  isLogged: false,
  token: '',
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    changeForm: (state) => {
      state.login = !state.login;
    },
    logging: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state = initialState;
    },
    storeJwt: (state, payload: PayloadAction<IStoreJWT>) => {
      state.token = payload.payload.token;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { changeForm, logging, logout, storeJwt } = authSlice.actions;
