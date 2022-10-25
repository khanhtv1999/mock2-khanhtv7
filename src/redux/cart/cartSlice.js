import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  quantity: 0,
};
// export const addToCart = createAsyncThunk(
//   "product/getProductById",
//   async (payload, thunkAPI) => {
//     const { id } = payload;
//     return addToCartThunk("v1/cart/create-item", thunkAPI);
//   }
// );
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log("payload", payload);
      const tempItem = state.cart.find((i, index) => i.id === payload.id);
      const index = state.cart.findIndex((i) => i.id === payload.id);
      console.log(index);
      if (!tempItem) {
        state.cart.push(payload);
      } else {
        state.cart[index].quantity += payload.quantity;
      }
    },
    totalQuantity: (state, { payload }) => {
      state.quantity = payload;
    },
    incQuantity: (state, { payload }) => {
      const index = state.cart.findIndex((i) => i.id === payload.id);
      state.cart[index].quantity += 1;
    },
    decQuantity: (state, { payload }) => {
      if (payload.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== payload.id);
      } else {
        const index = state.cart.findIndex((i) => i.id === payload.id);
        state.cart[index].quantity -= 1;
      }
    },
  },
});
export const { addToCart, totalQuantity, incQuantity, decQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
