import constants from './../constants';
const { c } = constants;

export const selectAlbum = (idOfAlbum) => {
  return {
    type: c.SELECT_ALBUM,
    albumId: idOfAlbum
  };
}

// Search action needs to call the discogs api
export const search = (searchTerm) => {
  return {
    type: c.SEARCH_ALBUMS,
    searchTerm: searchTerm
  }
}
