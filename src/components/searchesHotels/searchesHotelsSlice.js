import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foundHotels: []
}

const searchesHotelsSlice = createSlice({
    name: 'searchesHotels',
    initialState,
    reducers: {
        searchHotels: (state, action) => {
            state.foundHotels = action.payload;
        }
    }
})

const {reducer, actions} = searchesHotelsSlice;

export default reducer;

export const {
    searchHotels
} = actions;
