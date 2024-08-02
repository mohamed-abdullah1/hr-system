// src/store/slices/sidebarSlice.ts

import { createSlice } from "@reduxjs/toolkit";

export interface SidebarState {
  isCollapsed: boolean;
}

const initialState: SidebarState = {
  isCollapsed: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
