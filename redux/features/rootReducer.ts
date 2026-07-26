import authReducer from "@/redux/features/authSlice";
import wishlistReducer from "@/redux/features/wishlistSlice";
import cartReducer from "@/redux/features/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export default rootReducer;
