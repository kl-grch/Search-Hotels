import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorizationStatus: true,
  login: "",
  password: "",
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    authorizationFalse: (state) => {
      state.authorizationStatus = false;
      state.login = "";
      state.password = "";
      localStorage.setItem("auth", false);
    },
    authorizationTrue: (state, action) => {
      state.authorizationStatus = true;
      state.login = action.payload.login;
      state.password = action.payload.password;
      localStorage.setItem("auth", true);
    },
  },
});

const { actions, reducer } = authorizationSlice;

export default reducer;
export const { authorizationTrue, authorizationFalse } = actions;
