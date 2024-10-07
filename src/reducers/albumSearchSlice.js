import { createSlice } from "@reduxjs/toolkit";

// import constants from "../constants";
// const { initialState } = constants;
const initialState = {
  searchResults: {},
  isSearching: false,
  isAccepted: false,
  isRejected: false,
};

const albumSearchSlice = createSlice({
  name: "albumSearch",
  initialState,
  reducers: {
    pending: (state) => {
      return { 
        ...state, 
        searchResults: {},
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
