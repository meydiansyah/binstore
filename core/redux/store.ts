import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { apiSlice } from "@/core/redux/api/apiSlice";
import { authReducer, UserType } from "@/core/redux/slices/auth";
import uiReducer from "@/core/redux/slices/ui/uiSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer, { CartItemType } from "@/core/redux/slices/cart/cartSlices";

const persistConfigAuth = {
  key: "auth",
  storage,
};
const persistConfigCart = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: persistReducer<UserType, any>(persistConfigAuth, authReducer),
  ui: uiReducer,
  cart: persistReducer<{ items: CartItemType[] }, any>(
    persistConfigCart,
    cartReducer
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
