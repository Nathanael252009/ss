import { createSlice } from "@reduxjs/toolkit";


export const moneySlice = createSlice({
  name: "money",
  initialState: {
    value: 100000000000,
  },
  reducers: {},
});

export default moneySlice.reducer;
