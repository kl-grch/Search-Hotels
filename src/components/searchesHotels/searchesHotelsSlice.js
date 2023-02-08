import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchHotels: []
}

const searchesHotelsSlice = createSlice({
    name: 'searchesHotels',
    initialState,
    reducers: {
        searchHotels: (state, action) => {
            state.searchHotels = action.payload;
        }
    }
})

const {reducer, actions} = searchesHotelsSlice;

export default reducer;

export const {
    searchHotels
} = actions;
