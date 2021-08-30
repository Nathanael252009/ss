import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import moneySlice from "./moneySlice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    money: moneySlice,
  },
});
