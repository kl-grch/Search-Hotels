import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteHotels: [],
  filterPriceStatus: "",
  filterRateStatus: "",
};

const favoriteHotelsSlice = createSlice({
  name: "favoriteHotels",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteHotels.push(action.payload);
    },
    delFavorite: (state, action) => {
      state.favoriteHotels = state.favoriteHotels.filter((item) => {
        if (item.hotelId === action.payload.hotelId) return false;
        return item;
      });
    },
    filterRate: (state) => {
      state.filterPriceStatus = false;
      state.filterRateStatus = true;
      state.favoriteHotels = state.favoriteHotels.sort(function (a, b) {
        if (a.stars < b.stars) {
          return 1;
        }
        if (a.stars > b.stars) {
          return -1;
        }
        return 0;
      });
    },
    filterPrice: (state) => {
      state.filterPriceStatus = true;
      state.filterRateStatus = false;
      state.favoriteHotels = state.favoriteHotels.sort(function (a, b) {
        if (a.priceFrom > b.priceFrom) {
          return 1;
        }
        if (a.priceFrom < b.priceFrom) {
          return -1;
        }
        return 0;
      });
    },
  },
});

const { reducer, actions } = favoriteHotelsSlice;

export default reducer;

export const { addFavorite, delFavorite, filterRate, filterPrice } = actions;
