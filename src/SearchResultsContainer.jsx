import AlbumCoverWithInfo from './AlbumCoverWithInfo';

import './styles/SearchResultsContainer.scss';

function SearchResultsContainer(props) {

  console.log('search results container props:', props);
  
  //everything having to do with createSleepArray is for demo purposes only and needs to go. replace with real code that does real things
  // start here >
  if (props.albumSearch.searchResults.results) {
    const results = props.albumSearch.searchResults.results;

    return (
      <div className="searchContainer">
        {results.map((album) => {
          return (
            <AlbumCoverWithInfo
              albumId={album.id}
              title={album.title}
              artist={album.artist}
              albumCover={album.albumCover}
              firstListen={album.firstListen}
              loggedAt={album.loggedAt}
              releaseYear={album.releaseYear}
              key={album.id}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="searchContainer">
        <p>Loading...</p>
      </div>
    );
  }
};
// < end here

export default SearchResultsContainer;
