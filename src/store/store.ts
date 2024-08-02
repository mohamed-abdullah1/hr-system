import { configureStore } from "@reduxjs/toolkit";
// We'll import reducers here later
import sidebarReducer from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    // We'll add reducers here
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
