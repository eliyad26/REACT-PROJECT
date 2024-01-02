import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";

const rootReducer = combineReducers({
  users: usersSlice,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
