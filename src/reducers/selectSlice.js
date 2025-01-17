import { createSlice } from "@reduxjs/toolkit";

const initialState = { album: 55625 };

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    album: (state, action) => { return { ...state, album: action.albumId }}
  }
})

export default selectSlice.reducer;
