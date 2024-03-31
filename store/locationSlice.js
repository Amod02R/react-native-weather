import { createSlice } from "@reduxjs/toolkit";

const initialState = { city: "" };

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

export default citySlice;
export const cityActions = citySlice.actions;
