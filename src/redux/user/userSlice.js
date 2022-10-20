import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserThunk } from "./userThunk";

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
const initialState = {
  user: {
    id: "",
    email: "",
    name: "",
    roles: [],
    avatar_link: "",
    access_token: "",
    refresh_token: "",
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
      state.user.name = user.name;
      state.user.roles = user.roles;
      state.user.avatar_link = user.avata;
      state.user.access_token = tokens?.access?.token;
      state.user.refresh_token = tokens?.refresh?.token;
      state.isAuthenticated = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});
export default userSlice.reducer;
