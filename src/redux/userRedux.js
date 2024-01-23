import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    userNot: false,
    passNot: false,
  },
  reducers: {
    resetSate: (state) => {
      state.userNot = false;
      state.passNot = false;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.userNot = false;
      state.passNot = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginExistFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.error = false;
    },
    userNotFound: (state) => {
      state.isFetching = false;
      state.userNot = true;
    },
    passNotFound: (state) => {
      state.isFetching = false;
      state.passNot = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  userNotFound,
  passNotFound,
  resetSate,
} = userSlice.actions;
export default userSlice.reducer;
