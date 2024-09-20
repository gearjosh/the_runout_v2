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
    console.log('searchTerm: ', searchTerm);

    thunkAPI.dispatch(searchingAlbums())

    try {

      const response = await fetch(
        `https://api.discogs.com/database/search?key=${process.env.REACT_APP_DISCOGS_KEY}&secret=${process.env.REACT_APP_DISCOGS_SECRET}&query=${searchTerm}&type=master`
      )
        .then((res) => res.json()).results;

      console.log("response: ", response);

      thunkAPI.dispatch(() => {
        return {
          type: 'albumSearch/fulfilled',
          searchResults: response
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