// import { dispatch } from 'react-redux';

import constants from './../constants';
const { c } = constants;

export const selectAlbum = (id) => {
  return {
    type: c.SELECT_ALBUM,
    albumId: id
  };
}

export const searchingAlbums = () => {
  return {
    type: c.SEARCHING_ALBUMS
  }
}

export const searchAlbums = async (searchTerm) => {
  console.log('searchTerm: ', searchTerm)
  let result;
  try {
    result = await fetch(`https://api.discogs.com/database/search?key=${process.env.DISCOGS_KEY}&secret=${process.env.DISCOGS_SECRET}&query=${searchTerm}&type=master`).then(res => res.json());
    console.log('result: ', result)
    return {
      type: c.SEARCH_ALBUMS_SUCCESS,
      searchResults: result
    }
    
  } catch (err) {
    console.error(err);
    return {
      type: c.SEARCH_ALBUMS_FAILURE
    }
  }
}

export const triggerAlbumSearch = (searchTerm) => {
  return dispatch => {
    dispatch(searchingAlbums())
    dispatch(searchAlbums(searchTerm))
  }
}