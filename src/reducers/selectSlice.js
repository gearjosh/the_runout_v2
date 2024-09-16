import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "../constants";

// const selectSlice = (state = initialState.selectedAlbum, action) => {
//   switch (action.type) {
//     case c.SELECT_ALBUM:
//       return action.albumId;
//     default:
//       return state;
//   }
// };

const selectSlice = createSlice({
  name: 'select',
  selected: initialState.selected,
  reducers: {
    album: (state, action) => { return { ...state, album: action.albumId }}
  }
})

export default selectSlice.reducer;
