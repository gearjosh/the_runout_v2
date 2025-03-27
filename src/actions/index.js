// import { createAsyncThunk  } from '@reduxjs/toolkit';

export const selectAlbum = (id, coverImg, artist, year, title) => {
  return {
    type: 'select/album',
    albumId: id,
    albumCover: coverImg,
    artist: artist,
    releaseDate: year,
    title: title,
  };
};

// export const searchingAlbums = () => {
//   console.log('searching');
  
//   return {
//     type: 'albumSearch/pending'
//   };
// };

// export const albumSearch = createAsyncThunk(
//   'albumSearch/fetchAlbums',
//   async (searchTerm, thunkAPI) => {

//     thunkAPI.dispatch(searchingAlbums())
    
//     fetch(
//       `https://api.discogs.com/database/search?key=${process.env.REACT_APP_DISCOGS_KEY}&secret=${process.env.REACT_APP_DISCOGS_SECRET}&query=${searchTerm}&type=master`,
//       {
//         headers: {
//           "User-Agent": "The Runout - Social Media for Music 0.1 https://github.com/gearjosh/the_runout_v2",
//         },
//       }
//     )
//     .then(response => response.json())
//     .then(
//       (json) => {
//         console.log("json: ", json);

//         thunkAPI.dispatch(() => {          
//           return {
//             type: "albumSearch/fulfilled",
//             searchResults: json,
//           }
//         });
//       },
//       (error) => {
//         console.log("error: ", error);

//         thunkAPI.dispatch(() => {
//           return {
//             type: "albumSearch/rejected",
//           };
//         });
//       }
//     );
//   }
// )