import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
  name: "appConfig",
  initialState: {
    darkMode: false,
  },

  reducers: {
    updateDarkMode(s, a) {
      if (s.darkMode === a.payload) return;
      let html = document.getElementsByTagName("html").item(0);
      if(a.payload) html?.classList.add("dark");
      else html?.classList.remove("dark");
      s.darkMode = a.payload;
    },
  },
});

export default appConfig.reducer;
export const { updateDarkMode } = appConfig.actions;
