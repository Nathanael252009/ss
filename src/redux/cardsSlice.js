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
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Smartphone",
        price: 700,
        img: "https://neal.fun/spend/images/smartphone.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Acre of Farmland",
        price: 2500,
        img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Luxury Wine",
        price: 5000,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Jet Ski",
        price: 10000,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Tesla",
        price: 50000,
        img: "https://neal.fun/spend/images/tesla.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "House",
        price: 250000,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Boeing 747",
        price: 150000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Skyscraper",
        price: 750000000,
        img: "https://neal.fun/spend/images/skyscraper.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "Cruise Ship",
        price: 950000000,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
      {
        id: nanoid(),
        title: "NBA Team",
        price: 9000000000,
        img: "https://neal.fun/spend/images/nba-team.jpg",
        quantity: 0,
        anyBuyed: false,
        canBuyMore: true,
      },
    ],
    receiptItems: [],
    totalReceipt: 0,
  },
  reducers: {
    changeOrder: (state, action) => {
      const id = action.payload.id;
      const price = action.payload.price;
      const targetvalue = action.payload.targetvalue;

      const fark1 = state.items.find((item) => item.id === id).quantity;
      const fark2 = Math.abs(targetvalue - fark1);
      const fark3 = fark1 - targetvalue;
      let buy = fark3 < 0 ? true : false;

      if (
        100000000000 > price * targetvalue &&
        ((buy && state.billsMoney - price * fark2 > 0) || !buy)
      ) {
        //change item's quantity and anybuyed
        if (targetvalue > 0) {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? { ...item, anyBuyed: true, quantity: targetvalue }
              : item
          );
          state.items = updatedItems;
        } else {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? { ...item, anyBuyed: false, quantity: targetvalue }
              : item
          );
          state.items = updatedItems;
        }

        const itemForReceipt = state.items.find((item) => item.id === id);
        const itemInReceipt = state.receiptItems.find((item) => item.id === id);

        // subtract from money if that item isnt in receipt or same quantity befor
        if (itemInReceipt === undefined) {
          state.billsMoney -= price * targetvalue;
        } else if (itemForReceipt.quantity > itemInReceipt.quantity) {
          state.billsMoney -= price * fark2;
        } else if (itemForReceipt.quantity < itemInReceipt.quantity) {
          state.billsMoney += price * fark2;
        }

        //if item buyed before, only update the quantity
        const itemDahaOnceAlindiMi = state.receiptItems.find(
          (item) => item.id === id
        );
        if (itemDahaOnceAlindiMi === undefined) {
          state.receiptItems.push(itemForReceipt);
        } else {
          const updatedReceipt = state.receiptItems.map((item) =>
            item.id === id ? { ...item, quantity: targetvalue } : item
          );
          state.receiptItems = updatedReceipt;
        }

        // total receipt amount calculation, thank javascript
        let resultArr = [];
        let total = 0;
        state.receiptItems.map((item) => {
          resultArr.push(item.quantity * item.price);
        });
        for (let i = 0; i < resultArr.length; i++) {
          total += resultArr[i];
        }
        state.totalReceipt = total;

        //can buy more
        const updateBuyMore = state.items.map((item) =>
          item.price > state.billsMoney ? { ...item, canBuyMore: false } : item
        );
        state.items = updateBuyMore;
      }
    },
  },
});

export const { changeOrder } = cardsSlice.actions;
export default cardsSlice.reducer;
