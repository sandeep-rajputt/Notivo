import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

// TypeScript Root State Type
export type RootState = ReturnType<typeof store.getState>;
