import { combineReducers } from "@reduxjs/toolkit";
import selectSlice from './selectSlice';
import listenSlice from './listenSlice';
import albumSearchSlice from "./albumSearchSlice";

const rootReducer = combineReducers({
  selected: selectSlice,
  listens: listenSlice,
  albumSearch: albumSearchSlice
});

export default rootReducer;
