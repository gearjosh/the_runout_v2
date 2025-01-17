import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  isSearching: false,
  error: null,
};

export const fetchAlbums = createAsyncThunk(
  'albumSearch/fetchAlbums',
  async (searchTerm, thunkAPI) => {
    const response = await fetch(
      `https://api.discogs.com/database/search?key=${process.env.REACT_APP_DISCOGS_KEY}&secret=${process.env.REACT_APP_DISCOGS_SECRET}&query=${searchTerm}&type=master`
    );
    console.log('response: ', response)
    return response.json();
  }
)

const albumSearchSlice = createSlice({
  name: "albumSearch",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAlbums.pending, state => {
        state.isSearching = true;
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.isSearching = false;
        state.searchResults = action.payload['results'];
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.isSearching = false;
        state.error = action.error.message;
      });
  }
});

export default albumSearchSlice.reducer;
