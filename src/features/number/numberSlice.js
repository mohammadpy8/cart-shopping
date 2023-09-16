import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberValue: 0,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },
    decrement: (state) => {
      state.numberValue--;
    },
    increamentByAmount: (state, action) => {
      state.numberValue += action.payload;
    },
  },
});

export default numberSlice.reducer;
export const {increment, decrement, increamentByAmount} = numberSlice.actions
