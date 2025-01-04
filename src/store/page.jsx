import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-store/page";
import movieReducer from "./movie-store/page";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie:movieReducer
  },
});
