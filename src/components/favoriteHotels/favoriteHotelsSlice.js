import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteHotels: [],
    favoriteStatus: false
}

const favoriteHotelsSlice = createSlice({
    name: 'favoriteHotels',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorite = true;
            state.favoriteHotels.push(action.payload);
        },
        delFavorite: (state, action) => {
            state.favorite = false;
            state.favoriteHotels = state.favoriteHotels.filter(item => item.id !== action.payload)
        }
    }
})

const {reducer, actions} = favoriteHotelsSlice;

export default reducer;

export const {
    addFavorite,
    delFavorite
} = actions;