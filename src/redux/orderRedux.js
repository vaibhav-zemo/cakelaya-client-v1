import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderId: ""
  },
  reducers: {
    createOrder: (state, actions) => {
      state.orderId = actions.payload.orderId
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
