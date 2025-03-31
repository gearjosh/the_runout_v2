import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  isGettingInfo: false,
  error: null,
};

export const fetchArtistInfo = createAsyncThunk(
  "artistInfo/fetchArtistInfo",
  async (artist, thunkAPI) => {
    const response = await fetch(`
      http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json
    `);
    return response.json();
  }
);

const artistInfoSlice = createSlice(
  {
    name: "artistInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchArtistInfo.pending, (state) => {
          state.isGettingInfo = true;
          state.error = null;
        })
        .addCase(fetchArtistInfo.fulfilled, (state, action) => {
          state.isGettingInfo = false;
          state.info = action.payload["artist"];
        })
        .addCase(fetchArtistInfo.rejected, (state, action) => {
          state.isGettingInfo = false;
          state.error = action.error.message;
        });
    },
  }
);

export default artistInfoSlice.reducer;
