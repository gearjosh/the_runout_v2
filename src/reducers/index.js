import { combineReducers } from "@reduxjs/toolkit";
import selectSlice from './selectSlice';
import listenSlice from './listenSlice';
// import albumSearchReducer from "./albumSearchReducer";

const rootReducer = combineReducers({
  selectedAlbum: selectSlice,
  listens: listenSlice,
  // searchResults: albumSearchReducer,
  // isSearching: albumSearchReducer
});

export default rootReducer;
