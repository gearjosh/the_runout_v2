import constants from './../constants';
const { c, initialState } = constants;

const selectedAlbumReducer = (state = initialState.selectedAlbum, action) => {
  switch (action.type) {
  case c.SELECT_ALBUM:
    return action.albumId;
  default:
    return state;
  }
};

export default selectedAlbumReducer;