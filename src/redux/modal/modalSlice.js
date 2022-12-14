import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isOpenModalLogin: false,
  isOpenModalRegister: false,
  isOpenModalForgot: false,
  isOpenModalEditUser: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalLogin: (state) => {
      state.isOpenModalLogin = true;
    },
    closeModalLogin: (state) => {
      state.isOpenModalLogin = false;
    },
    openModalRegister: (state) => {
      state.isOpenModalRegister = true;
    },
    closeModalRegister: (state) => {
      state.isOpenModalRegister = false;
    },
    openModalForgot: (state) => {
      state.isOpenModalForgot = true;
    },
    closeModalForgot: (state) => {
      state.isOpenModalForgot = false;
    },
    openModalEditUser: (state) => {
      state.isOpenModalEditUser = true;
    },
    closeModalEditUser: (state) => {
      state.isOpenModalEditUser = false;
    },
  },
});
export const {
  openModalLogin,
  closeModalLogin,
  openModalRegister,
  closeModalRegister,
  openModalForgot,
  closeModalForgot,
  openModalEditUser,
  closeModalEditUser,
} = modalSlice.actions;
export default modalSlice.reducer;
