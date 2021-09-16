import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./features/animals/animalSlice";

export const store = configureStore({
  reducer: {
    animals: animalReducer,
  },
});
