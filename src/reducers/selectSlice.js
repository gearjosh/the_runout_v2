import { createSlice } from "@reduxjs/toolkit";

import constants from "../constants";
// import { selectAlbum } from "../actions";
const { initialState } = constants;

// const selectedAlbumReducer = (state = initialState.selectedAlbum, action) => {
//   switch (action.type) {
//     case c.SELECT_ALBUM:
//       return action.albumId;
//     default:
//       return state;
//   }
// };

const selectSlice = createSlice({
  name: 'select',
  selectedAlbum: initialState.selectedAlbum,
  reducers: {
    album: (state, action) => { return { ...state, selectAlbum: action.albumId }}
  }
})

export default selectSlice.reducer;
