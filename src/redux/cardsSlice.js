import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "Big Mac",
        price: 2,
        img: "https://neal.fun/spend/images/big-mac.jpg",
      },
      {
        id: nanoid(),
        title: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
      },
    ],
  },
  reducers: {},
});

export default cardsSlice.reducer;
