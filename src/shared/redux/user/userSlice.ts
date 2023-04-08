import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './userTypes';
import { appNavigation } from '../../utilities/history';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: {
    name: '',
    email: '',
    access_token: '',
  },
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => {
      appNavigation('/login');
      return initialState;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
