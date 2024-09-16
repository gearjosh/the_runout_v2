import { createAsyncThunk, dispatch  } from '@reduxjs/toolkit';

import constants from './../constants';
const { c } = constants;

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

    dispatch(searchingAlbums())

    try {

      const response = await fetch(
        `https://api.discogs.com/database/search?key=${process.env.DISCOGS_KEY}&secret=${process.env.DISCOGS_SECRET}&query=${searchTerm}&type=master`
      )
        .then((res) => res.json())
        .results.filter((thing) => thing.type === "master");

      console.log("response: ", response);

      dispatch(() => {
        return {
          type: 'albumSearch/fulfilled',
          searchResults: response
        }
      })

    } catch (err) {
      dispatch(() => {
        return {
          type: "albumSearch/rejected",
        };
      });
      console.error(err);
    }
  }
);

// export const searchAlbums = async (searchTerm) => {
//   console.log('searchTerm: ', searchTerm)
//   let result;
//   try {
//     result = await fetch(`https://api.discogs.com/database/search?key=${process.env.DISCOGS_KEY}&secret=${process.env.DISCOGS_SECRET}&query=${searchTerm}&type=master`).then(res => res.json());
//     console.log('result: ', result);
//     return {
//       type: c.SEARCH_ALBUMS_SUCCESS,
//       searchResults: result
//     };
    
//   } catch (err) {
//     console.error(err);
//     return {
//       type: c.SEARCH_ALBUMS_FAILURE
//     };
//   }
// };

export const triggerAlbumSearch = (searchTerm) => {
  return dispatch => {
    dispatch(searchingAlbums())
    dispatch(searchAlbums(searchTerm))
  };
};