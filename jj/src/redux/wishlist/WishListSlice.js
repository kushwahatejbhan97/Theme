import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishList: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};


export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      state.wishList.push(action.payload);

      toast.success(`${action.payload.name} Added to wishlist`, {
        position: "bottom-center",
        autoClose: 600,
      });

      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeFromWishList(state, action) {
      const newWishlist = state.wishList.filter(
        (product) => product?._id !== action.payload._id
      );
      state.wishList = newWishlist;
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeAll(state) {
      state.wishList = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishList, removeFromWishList, removeAll } =
  wishListSlice.actions;
export default wishListSlice.reducer;
