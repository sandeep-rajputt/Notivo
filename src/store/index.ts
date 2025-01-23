import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import userDataReducer from "./slices/userDataSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    userData: userDataReducer,
  },
});

// TypeScript Root State Type
export type RootState = ReturnType<typeof store.getState>;

// Add AppDispatch type
export type AppDispatch = typeof store.dispatch;
