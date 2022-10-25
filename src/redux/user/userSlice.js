import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  editUserThunk,
  changeInfoBefoCheckoutThunk,
} from "./userThunk";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/v1/auth/login", user, thunkAPI);
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/v1/auth/login", user, thunkAPI);
  }
);
export const editUser = createAsyncThunk(
  "user/editUser",
  async (payload, thunkAPI) => {
    const { username, contactEdit, emailEdit, token } = payload;
    return editUserThunk(username, contactEdit, emailEdit, token, thunkAPI);
  }
);
export const changeInfoBefoCheckout = createAsyncThunk(
  "user/changeInfoBefoCheckout",
  async (payload, thunkAPI) => {
    const { contactEdit, emailEdit, token } = payload;
    return changeInfoBefoCheckoutThunk(contactEdit, emailEdit, token, thunkAPI);
  }
);
const initialState = {
  user: {
    id: "",
    email: "",
    name: "",
    roles: [],
    avatar_link: "",
    access_token: "",
    refresh_token: "",
    contact: "",
  },
  isAuthenticated: false,
  isLoading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user, tokens } = payload;
      console.log("checkpayload", user);
      state.user.id = user.id;
      state.user.name = user.username;
      state.user.email = user.email;
      state.user.roles = user.roles;
      state.user.avatar_link = user.avatar;
      state.user.access_token = tokens?.access?.token;
      state.user.refresh_token = tokens?.refresh?.token;
      state.user.contact = user.contact;
      state.isAuthenticated = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [editUser.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      console.log("checkpayy", payload);
      state.user.contact = payload.data.contact;
      state.user.email = payload.data.email;
      state.user.name = payload.data.username;
    },
    [editUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [changeInfoBefoCheckout.pending]: (state) => {
      state.isLoading = true;
    },
    [changeInfoBefoCheckout.fulfilled]: (state, { payload }) => {
      console.log("checkpayy", payload);
      // state.user.contact = payload.data.contact;
      // state.user.email = payload.data.email;
      // state.user.name = payload.data.username;
    },
    [changeInfoBefoCheckout.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});
export default userSlice.reducer;
