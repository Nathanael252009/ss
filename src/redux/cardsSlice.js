import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    billsMoney: 100000000000,
    receiptItems: [],
    items: [
      {
        id: nanoid(),
        title: "Big Mac",
        price: 2,
        img: "https://neal.fun/spend/images/big-mac.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Smartphone",
        price: 700,
        img: "https://neal.fun/spend/images/smartphone.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Acre of Farmland",
        price: 2500,
        img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Luxury Wine",
        price: 5000,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Jet Ski",
        price: 10000,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Tesla",
        price: 50000,
        img: "https://neal.fun/spend/images/tesla.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "House",
        price: 250000,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Boeing 747",
        price: 150000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Skyscraper",
        price: 750000000,
        img: "https://neal.fun/spend/images/skyscraper.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "Cruise Ship",
        price: 930000000,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
        quantity: 0,
        anyBuyed: false,
      },
      {
        id: nanoid(),
        title: "NBA Team",
        price: 2120000000,
        img: "https://neal.fun/spend/images/nba-team.jpg",
        quantity: 0,
        anyBuyed: false,
      },
    ],
  },
  reducers: {
    changeQuantity: (state, action) => {
      const id = action.payload.id;
      const targetvalue = action.payload.targetvalue;
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: targetvalue } : item
      );
      state.items = updatedItems;
    },
  },
});

export const { changeQuantity } = cardsSlice.actions;
export default cardsSlice.reducer;
