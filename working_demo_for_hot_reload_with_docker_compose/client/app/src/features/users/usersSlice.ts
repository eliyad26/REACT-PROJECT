import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "./interfaces/User";
import getAllUsers from "./services/getAllUsers";

interface InitialState {
  users: User[];
  user: User;
  filteredUsers: User[];
  pending: boolean;
  error: string;
}

const initialState: InitialState = {
  users: [],
  user: {} as User,
  filteredUsers: [],
  pending: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllUsers.pending, (state) => {
      state.pending = false;
      state.error = "";
      return state;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.error = "";
      state.users = payload;
      state.filteredUsers = payload;
      return state;
    });
    builder.addCase(getAllUsers.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "err";
      return state;
    });
  },
});

export const { setUsers, setUser } = usersSlice.actions;

export default usersSlice.reducer;
