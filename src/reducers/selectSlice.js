import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const selectAlbum = (id) => {
  return {
    type: 'select/album',
    albumId: id,
  };
};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    album: (state, action) => { return { ...state, albumId: action.albumId }}
  }
})

export default selectSlice.reducer;
