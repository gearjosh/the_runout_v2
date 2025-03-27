import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  isGettingInfo: false,
  error: null,
};

export const fetchAlbumInfo = createAsyncThunk(
  "albumInfo/fetchAlbumInfo",
  async (albumId, thunkAPI) => {
    const response = await fetch(`
      http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_LASTFM_KEY}&mbid=${albumId}&format=json
    `);
    return response.json();
  }
);

const albumInfoSlice = createSlice(
  {
    name: "albumInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAlbumInfo.pending, (state) => {
          state.isGettingInfo = true;
          state.error = null;
        })
        .addCase(fetchAlbumInfo.fulfilled, (state, action) => {
          state.isGettingInfo = false;
          state.info = action.payload["album"];
        })
        .addCase(fetchAlbumInfo.rejected, (state, action) => {
          state.isGettingInfo = false;
          state.error = action.error.message;
        });
    },
  }
);

export default albumInfoSlice.reducer;
