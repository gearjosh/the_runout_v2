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

// this needs to be fleshed out to call the discogs api
export const searchAlbums = (searchTerm) => {
  console.log('searchTerm: ', searchTerm)
  return {
    type: c.SEARCH_ALBUMS_SUCCESS
  }
}

export const triggerAlbumSearch = (searchTerm) => {
  return dispatch => {
    dispatch(searchingAlbums())
    dispatch(searchAlbums(searchTerm))
  }
}