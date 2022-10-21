import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  quantity: 0,
};
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
  },
});
export const { addToCart, totalQuantity } = cartSlice.actions;
export default cartSlice.reducer;
