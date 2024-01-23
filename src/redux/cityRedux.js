import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    city: "Sultanpur",
  },
  reducers: {
    placeCity: (state, actions) => {
      state.city = actions.payload.temp;
    },
  },
});

export const { placeCity } = citySlice.actions;
export default citySlice.reducer;
