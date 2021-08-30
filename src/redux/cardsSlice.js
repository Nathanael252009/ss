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
      {
        id: nanoid(),
        title: "Smartphone",
        price: 700,
        img: "https://neal.fun/spend/images/smartphone.jpg",
      },
      {
        id: nanoid(),
        title: "Acre of Farmland",
        price: 2500,
        img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
      },
      {
        id: nanoid(),
        title: "Luxury Wine",
        price: 5000,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
      },
      {
        id: nanoid(),
        title: "Jet Ski",
        price: 10000,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
      },
      {
        id: nanoid(),
        title: "Tesla",
        price: 50000,
        img: "https://neal.fun/spend/images/tesla.jpg",
      },
      {
        id: nanoid(),
        title: "House",
        price: 250000,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
      },
      {
        id: nanoid(),
        title: "Boeing 747",
        price: 150000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
      },
      {
        id: nanoid(),
        title: "Skyscraper",
        price: 750000000,
        img: "https://neal.fun/spend/images/skyscraper.jpg",
      },
      {
        id: nanoid(),
        title: "Cruise Ship",
        price: 930000000,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
      },
      {
        id: nanoid(),
        title: "NBA Team",
        price: 2120000000,
        img: "https://neal.fun/spend/images/nba-team.jpg",
      },
    ],
  },
  reducers: {},
});

export default cardsSlice.reducer;
