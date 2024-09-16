import { createSlice } from '@reduxjs/toolkit';

import constants from '../constants';
const { initialState } = constants;

// const listenLogReducer = (state = initialState.listens, action) => {
//   return state;
// };

const listenSlice = createSlice({
  name: 'listens',
  listens: initialState.listens,
  // reducers: {
  //   log(state, action) {
  //     return
  //   }
  // }
})

export default listenSlice.reducer;
