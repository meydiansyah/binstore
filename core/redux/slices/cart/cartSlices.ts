/* eslint-disable no-param-reassign */
import { ProductType } from "@/core/types/post";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/core/redux/store";

const addToCart = (state, product) => {
  const isProductInCart = state.find((item) => item.id === product.id);
  if (isProductInCart) {
    return state.map((item) => {
      if (item.id === product.id) {
        item.quantity += product.quantity;
      }
      return item;
    });
  }
  return [...state, product];
};

export interface CartItemType extends ProductType {
  quantity: number;
}

const initialState: { items: CartItemType[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.items = addToCart(state.items, payload);
    },
    deleteItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    addQuantity: (state, { payload }) => {
      state.items.map((item) => {
        if (item.id === payload) {
          item.quantity += 1;
        }
        return item;
      });
    },
    subtractQuantity: (state, { payload }) => {
      state.items.map((item) => {
        if (item.id === payload) {
          item.quantity -= 1;
        }
        return item;
      });
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const {
  addItems,
  addQuantity,
  subtractQuantity,
  deleteItem,
  clearItems,
} = cartSlice.actions;
export default cartSlice.reducer;
