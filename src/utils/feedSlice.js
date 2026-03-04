import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state, action) => [],
  },
});
export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
