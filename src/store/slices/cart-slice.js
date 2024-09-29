// -- import create slice method
// -- initialize initial state
// -- create slice by using createslice -> give a name, mention initial state, actions
// -- at the end import those actions you will be using in your components

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // here we will create all the actions
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// to export the actions
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
