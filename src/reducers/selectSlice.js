import { createSlice } from "@reduxjs/toolkit";

// import constants from "../constants";
// const { initialState } = constants;
const initialState = { album: 55625 };

// const selectSlice = (state = initialState.selected.album, action) => {
//   switch (action.type) {
//     case c.SELECT_ALBUM:
//       return action.albumId;
//     default:
//       return state;
//   }
// };

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    album: (state, action) => { return { ...state, album: action.albumId }}
  }
})

export default selectSlice.reducer;
