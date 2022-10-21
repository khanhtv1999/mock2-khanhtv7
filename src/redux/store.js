import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userSlice from "./user/userSlice";
import modalSlice from "./modal/modalSlice";
import productSlice from "./product/productSlice";
import productDetailSlice from "./product/productDetailSlice";
import cartSlice from "./cart/cartSlice";
const reducers = combineReducers({
  user: userSlice,
  modal: modalSlice,
  product: productSlice,
  productDetail: productDetailSlice,
  cart: cartSlice,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
