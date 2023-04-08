import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/authApi';
import { userApi } from './user/userApi';
import { userReducer } from './user/userSlice';
import { authReducer } from './auth/authSlice';
import { companyReducer } from './company/companySlice';
import { companyApi } from './company/companyApi';
import { localReducer } from './local/localSlice';
import { localApi } from './local/localApi';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    userState: userReducer,
    authState: authReducer,
    companyState: companyReducer,
    localState: localReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [localApi.reducerPath]: localApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      thunk,
      authApi.middleware,
      userApi.middleware,
      companyApi.middleware,
      localApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
