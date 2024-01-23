import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "loader",
  initialState: {
    isFetching: false,
  },
  reducers: {
    loadStart: (state) => {
      state.isFetching = true;
    },
    loadSuccess: (state, action) => {
      state.isFetching = false;
    },
  },
});

export const { loadStart, loadSuccess } = productSlice.actions;
export default productSlice.reducer;
