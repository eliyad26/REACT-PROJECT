import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_USERS } from "../../../assets/graphQl/usersQueries";
import client from "../../../apolloApi.ts/apolloApi";

const getAllUsers = createAsyncThunk("usersSlice/getAllUsers", async () => {
  try {
    const { data } = await client.query({ query: GET_USERS });
    return data.getUsers;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default getAllUsers;
