import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "../features/homepage/HomePage/videosSlice";
import shortsSlice from "../features/shortspage/ShortsPage/shortsSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
    shorts: shortsSlice.reducer,
  },
});

export default store;
