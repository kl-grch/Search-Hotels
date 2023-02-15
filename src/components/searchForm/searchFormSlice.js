import { createSlice } from "@reduxjs/toolkit";
const dayjs = require("dayjs");

const initialState = {
  location: "Москва",
  checkInDate: dayjs().format("YYYY-MM-DD"),
  checkOutDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
  countDays: 1,
};

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    setSearchForm: (state, action) => {
      state.location = action.payload.location;
      state.checkInDate = action.payload.checkInDate;
      state.countDays = action.payload.countDays;
      state.checkOutDate = dayjs(action.payload.checkInDate)
        .add(action.payload.countDays, "day")
        .format("YYYY-MM-DD");
    },
  },
});

const { actions, reducer } = searchFormSlice;

export default reducer;

export const { setSearchForm } = actions;
