import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    billsMoney: 100000000000,
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
    receiptItems: [],
    totalReceipt: 0,
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
    buyItem: (state, action) => {
      const id = action.payload.id;
      const price = action.payload.price;
      const quantity = action.payload.quantity;

      if (state.billsMoney > price * quantity) {
        const updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, anyBuyed: true } : item
        );
        state.items = updatedItems;

        const itemForReceipt = state.items.find((item) => item.id === id);
        const itemInReceipt = state.receiptItems.find((item) => item.id === id);

        //money ile receipt rakamlarını senkronize ederi
        if (itemInReceipt === undefined) {
          state.billsMoney -= price * quantity;
        } else if (itemForReceipt.quantity !== itemInReceipt.quantity) {
          state.billsMoney -= price * quantity;
        }

        const itemDahaOnceAlindiMi = state.receiptItems.find(
          (item) => item.id === id
        );

        //if item buyed before, only update the quantity
        if (itemDahaOnceAlindiMi === undefined) {
          state.receiptItems.push(itemForReceipt);
        } else {
          const updatedReceipt = state.receiptItems.map((item) =>
            item.id === id ? { ...item, quantity: quantity } : item
          );
          state.receiptItems = updatedReceipt;
        }

        // total receipt amount calculation
        let resultArr = [];
        let total = 0;
        state.receiptItems.map((item) => {
          resultArr.push(item.quantity * item.price);
        });
        for (let i = 0; i < resultArr.length; i++) {
          total += resultArr[i];
        }
        state.totalReceipt = total;
      }
    },
  },
});

export const { changeQuantity, buyItem } = cardsSlice.actions;
export default cardsSlice.reducer;
