import { createSlice } from "@reduxjs/toolkit";

const initialState = {
favItems: JSON.parse(localStorage.getItem("favItems")) || []
};

const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav: (state, action) => {
    
      const existing = state.favItems.find(item => item.id === action.payload.id);
      if (!existing) {
        state.favItems.push(action.payload);
        localStorage.setItem("favItems", JSON.stringify(state.favItems));
      }
    },

    removeFromFav: (state, action) => {

      state.favItems = state.favItems.filter(item => item.id !== action.payload);
      localStorage.setItem("favItems", JSON.stringify(state.favItems));
    },
  }, 
}); 

export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;
