import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  isSearching: false,
  error: null,
};

export const fetchAlbums = createAsyncThunk(
  "albumSearch/fetchAlbums",
  async (searchTerm, thunkAPI) => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchTerm}&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`
    );
    return response.json();
  }
);

const albumSearchSlice = createSlice(
  {
    name: "albumSearch",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAlbums.pending, (state) => {
          state.isSearching = true;
          state.error = null;
        })
        .addCase(fetchAlbums.fulfilled, (state, action) => {
          state.isSearching = false;
          state.searchResults =
            action.payload["results"]["albummatches"]["album"];
        })
        .addCase(fetchAlbums.rejected, (state, action) => {
          state.isSearching = false;
          state.error = action.error.message;
        });
    },
  },
);

export default albumSearchSlice.reducer;
