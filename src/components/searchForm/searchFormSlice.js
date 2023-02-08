import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: 'Москва',
    checkInDate: '2023-02-10',
    countDays: 1,
}

const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setSearchForm: (state, action) => {
            state.location = action.payload.location;
            state.checkInDate = action.payload.checkInDate;
            state.countDays = action.payload.countDays
        },
        setCheckInDate: (state, action) => {
            state.checkInDate = action.payload.checkInDate;
        }
    }
})

const {actions, reducer} = searchFormSlice;

export default reducer;

export const {
    setSearchForm,
    setCheckInDate
} = actions;