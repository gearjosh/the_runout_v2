import constants from './../constants';
const { c } = constants;

export const selectAlbum = (idOfAlbum) => {
  return {
    type: c.SELECT_ALBUM,
    albumId: idOfAlbum
  };
}

export const searchAlbums = (searchTerm) => {
  return {
    type: c.SEARCH_ALBUMS,
    searchTerm: searchTerm
  }
}
