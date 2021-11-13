import { configureStore } from "@reduxjs/toolkit";
import Baccarat from "./Baccarat";

const Store = configureStore({
  reducer: {
    Baccarat: Baccarat.reducer,
  },
});

export default Store;
