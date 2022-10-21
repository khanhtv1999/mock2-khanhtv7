import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductByIdThunk, createReviewThunk } from "./productDetailThunk";

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (payload, thunkAPI) => {
    const { id } = payload;
    return getProductByIdThunk(`v1/products/${id}`, thunkAPI);
  }
);
export const createReview = createAsyncThunk(
  "product/createReview",
  async (payload, thunkAPI) => {
    const { content, rating, productId, token } = payload;
    console.log("check payload", payload);
    return createReviewThunk(
      `v1/products/${productId}/reviews`,
      content,
      rating,
      token,
      productId,
      thunkAPI
    );
  }
);
const initialState = {
  isLoading: false,
  product: {},
  reviews: {},
  isSuccess: false,
};
const productDetailSlice = createSlice({
  name: "ProductDetail",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.product = payload.data.product;
      state.reviews = payload.data.reviews;
      state.isSuccess = true;
    },
    [getProductById.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [createReview.pending]: (state) => {
      state.isLoading = true;
    },
    [createReview.fulfilled]: (state, { payload }) => {
      state.isSuccess = true;
    },
    [createReview.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default productDetailSlice.reducer;
