import { combineReducers } from "@reduxjs/toolkit";
import selectedAlbumReducer from './selectedAlbumReducer';
import listenLogReducer from './listenLogReducer';

const rootReducer = combineReducers({
  selectedAlbum: selectedAlbumReducer,
  listens: listenLogReducer
});

export default rootReducer;
