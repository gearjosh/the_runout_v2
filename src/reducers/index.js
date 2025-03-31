import { combineReducers } from "@reduxjs/toolkit";
import selectSlice from './selectSlice';
import listenSlice from './listenSlice';
import albumSearchSlice from "./albumSearchSlice";
import albumInfoSlice from "./albumInfoSlice";
import artistInfoSlice from "./artistInfoSlice";

const rootReducer = combineReducers({
  selected: selectSlice,
  listens: listenSlice,
  albumSearch: albumSearchSlice,
  albumInfo: albumInfoSlice,
  artistInfo: artistInfoSlice
});

export default rootReducer;
