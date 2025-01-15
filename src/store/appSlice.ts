import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../data/getFoods";

// Define a type for the slice state
export interface appState {
  foods: Food[];
  cart: Food[];
}

// Define the initial state using that type
const initialState: appState = {
  foods: [],
  cart: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFoods: (state, action: PayloadAction<Food[]>) => {
      state.foods = action.payload;
    },
    addtoCart: (state, action: PayloadAction<Food>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Food>) => {
      state.cart.splice(state.cart.indexOf(action.payload));
    },
  },
});

export const { setFoods, addtoCart, removeFromCart } = appSlice.actions;

export default appSlice.reducer;
