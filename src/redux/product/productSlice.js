import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCategoriesThunk, fetchProductsThunk } from "./productThunk";
export const fetchAllCategories = createAsyncThunk(
  "user/fetchAllCategories",
  async (payload, thunkAPI) => {
    return fetchAllCategoriesThunk("/v1/products/get-all-categories", thunkAPI);
  }
);
export const fetchProducts = createAsyncThunk(
  "user/fetchProducts",
  async (payload, thunkAPI) => {
    return fetchProductsThunk(thunkAPI);
  }
);
const initialState = {
  categories: [],
  isLoading: false,
  loadCategories: false,
  category: "",
  products: [],
  fetchProductSuccess: false,
};
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
  extraReducers: {
    [fetchAllCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload.data;
      state.isLoading = false;
      state.loadCategories = true;
    },
    [fetchAllCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.data.result;
      state.isLoading = false;
      state.fetchProductSuccess = true;
    },
    [fetchProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});
export const { setCategory } = productSlice.actions;
export default productSlice.reducer;
