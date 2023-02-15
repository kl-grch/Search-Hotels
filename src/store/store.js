import { configureStore } from "@reduxjs/toolkit";
import authorization from "../components/authorizationForm/authorizationSlice";
import searchForm from "../components/searchForm/searchFormSlice";
import searchesHotels from "../components/searchesHotels/searchesHotelsSlice";
import favoriteHotels from "../components/favoriteHotels/favoriteHotelsSlice";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { authorization, searchForm, searchesHotels, favoriteHotels },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
