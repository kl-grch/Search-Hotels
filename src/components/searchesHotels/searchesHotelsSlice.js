import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../assets/searchesHotels/img1.png";
import img2 from "../../assets/searchesHotels/img2.png";
import img3 from "../../assets/searchesHotels/img3.png";
import img4 from "../../assets/searchesHotels/img4.png";

const initialState = {
  images: [img1, img2, img3, img4],
  foundHotels: [],
};

const searchesHotelsSlice = createSlice({
  name: "searchesHotels",
  initialState,
  reducers: {
    searchHotels: (state, action) => {
      state.foundHotels = action.payload;
    },
  },
});

const { reducer, actions } = searchesHotelsSlice;

export default reducer;

export const { searchHotels } = actions;
