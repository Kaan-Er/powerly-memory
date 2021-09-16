import { createSlice } from "@reduxjs/toolkit";
import shuffleAnimals from "../../utils/shuffleAnimals";

const initialState = {
  animals: shuffleAnimals(),
  foundAnimals: [],
  selectedFirstAnimal: { id: null, name: "" },
  selectedSecondAnimal: { id: null, name: "" },
};

export const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    setAnimals: (state) => {
      state.animals = shuffleAnimals();
    },
    addFoundAnimals: (state, action) => {
      state.foundAnimals.push(action.payload);
    },
    clearFoundAnimals: (state) => {
      state.foundAnimals = [];
    },
    setFirstAnimal: (state, action) => {
      state.selectedFirstAnimal = action.payload;
    },
    clearFirstAnimal: (state) => {
      state.selectedFirstAnimal = { id: null, name: "" };
    },
    setSecondAnimal: (state, action) => {
      state.selectedSecondAnimal = action.payload;
    },
    clearSecondAnimal: (state) => {
      state.selectedSecondAnimal = { id: null, name: "" };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAnimals,
  addFoundAnimals,
  clearFoundAnimals,
  setFirstAnimal,
  clearFirstAnimal,
  setSecondAnimal,
  clearSecondAnimal,
} = animalSlice.actions;

export default animalSlice.reducer;
