import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    error: false,
    category: "",
  },
  reducers: {
    addProduct: (state, action) => {
      let flag = action.payload.category == "Chaats and Juices" ? 1 : 0;

      if (state.products.length) {
        for (let i = 0; i < state.products.length; i++) {
          if (
            (state.products[i].category != "Chaats and Juices" && flag) ||
            (state.products[i].category == "Chaats and Juices" && !flag)
          ) {
            state.error = true;
            return;
          }
        }
      }
      state.category = action.payload.category;
      for (let i = 0; i < state.products.length; i++) {
        if (
          action.payload.title === state.products[i].title &&
          action.payload.size === state.products[i].size &&
          action.payload.color === state.products[i].color
        ) {
          state.products[i].quantity += action.payload.quantity;
          state.total += Number(action.payload.price * action.payload.quantity);
          if(action.payload.action=="Buy") window.location.href = "https://cakelaya-client-v1.vercel.app/cart";
          return;
        }
      }
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += Number(action.payload.price * action.payload.quantity);
      if(action.payload.action=="Buy") window.location.href = "https://cakelaya-client-v1.vercel.app/cart";
    },
    addAddon: (state, action) => {
      let flag = action.payload.category == "Chaats and Juices" ? 1 : 0;

      if (state.products.length) {
        for (let i = 0; i < state.products.length; i++) {
          if (
            (state.products[i].category != "Chaats and Juices" && flag) ||
            (state.products[i].category == "Chaats and Juices" && !flag)
          ) {
            state.error = true;
            return;
          }
        }
      }
      for (let i = 0; i < state.products.length; i++) {
        if (action.payload.title == state.products[i].title) {
          state.products[i].quantity += 1;
          state.total += Number(state.products[i].price);
          return;
        }
      }
      state.quantity += 1;
      state.products.push(action.payload);
      action.payload.quantity = 1;
      state.total += Number(action.payload.price * action.payload.quantity);
    },
    removeProduct: (state, action) => {
      state.quantity = 0;
      while (state.products.length > 0) {
        state.products.pop();
      }
      state.total = 0;
    },
    decQuantity: (state, action) => {
      const idx = action.payload;
      state.total -= Number(state.products[idx].price);

      if (state.products[idx].quantity === 1) {
        state.quantity -= 1;
        state.products.splice(idx, 1);
      } else {
        state.products[idx].quantity -= 1;
      }
    },
    incQuantity: (state, action) => {
      const idx = action.payload;
      state.products[idx].quantity += 1;
      state.total += Number(state.products[idx].price);
    },
    resetError: (state, action) => {
      state.error = false;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  decQuantity,
  incQuantity,
  addAddon,
  resetError,
} = cartSlice.actions;
export default cartSlice.reducer;
