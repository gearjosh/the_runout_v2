import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "../constants";

const albumSearchSlice = createSlice({
  name: "albumSearch",
  albumSearch: initialState.albumSearch,
  reducers: {
    pending: (state) => {
      return { 
        ...state, 
        searchResults: null,
        isSearching: true, 
        isRejected: false, 
        isAccepted: false 
      };
    },
    fulfilled: (state, action) => {
      return {
        ...state,
        isSearching: false,
        searchResults: action.searchResults
      };
    },
    rejected: (state) => {
      return { 
        ...state, 
        isSearching: false, 
        isRejected: true 
      };
    },
  },
});

export default albumSearchSlice.reducer;
