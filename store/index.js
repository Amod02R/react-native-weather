import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./locationSlice";
const store = configureStore({
  reducer: { city: citySlice.reducer },
});

export default store;
