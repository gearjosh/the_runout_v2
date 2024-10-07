import { createAsyncThunk  } from '@reduxjs/toolkit';

export const selectAlbum = (id) => {
  return {
    type: 'select/album',
    albumId: id
  };
};

export const searchingAlbums = () => {
  return {
    type: 'albumSearch/pending'
  };
};

export const searchAlbums = createAsyncThunk(
  'albumSearch',
  async (searchTerm, thunkAPI) => {
    // console.log('searchTerm: ', searchTerm);
    // console.log('REACT_APP_DISCOGS_KEY: ', process.env.REACT_APP_DISCOGS_KEY)

    thunkAPI.dispatch(searchingAlbums())
    try {

      const response = await fetch(
        `https://api.discogs.com/database/search?key=${process.env.REACT_APP_DISCOGS_KEY}&secret=${process.env.REACT_APP_DISCOGS_SECRET}&query=${searchTerm}&type=master`
      )
      const results = response.json();

      console.log("discogs results: ", results);

      thunkAPI.dispatch(() => {
        return {
          type: 'albumSearch/fulfilled',
          searchResults: results.results
        }
      })

    } catch (err) {
      thunkAPI.dispatch(() => {
        return {
          type: "albumSearch/rejected",
        };
      });
      console.error(err);
    }
  }
);