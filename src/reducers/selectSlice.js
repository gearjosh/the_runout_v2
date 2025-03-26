import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    album: (state, action) => { return { ...state, albumId: action.albumId, albumCover: action.albumCover, artist: action.artist, releaseYear: action.releaseYear, title: action.title }}
  }
})

export default selectSlice.reducer;
