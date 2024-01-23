import { loginFailure, loginStart, loginSuccess, userNotFound, passNotFound } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if (res.status == 201) dispatch(userNotFound());
    else if (res.status == 202) dispatch(passNotFound());
    else dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    if (res.status == 201) dispatch(passNotFound());
    else if (res.status == 202) dispatch(userNotFound());
    else dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
