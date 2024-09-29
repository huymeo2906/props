// A global store just like the Global context

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cart-slice.js";

const store = configureStore({
  reducer: {
    //  here combmine multiple reducers
    cart: cartReducer,
  },
});

export default store;

// -- how to combine this / use feature of redux in your react project
// -> in your index just like we did the global context you have to import this store there and pass it in the root level so you will be able to access all the properties here
// -> to do this just import a component PROVIDER from redux toolkit and  (will combine your react and redux)
// -> and it will take the store property and thats it
