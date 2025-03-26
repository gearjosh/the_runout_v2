import AlbumCoverWithInfo from './AlbumCoverWithInfo';
import napoleon from './img/napoleon.png';

import './styles/SearchResultsContainer.scss';

function SearchResultsContainer(props) {

  console.log('search results container props:', props);
  
  // start here >
    const search = props.albumSearch;
    

    if (search.searchResults && search.searchResults.length > 0) {
      return (
        <div className="searchContainer">
          {search.searchResults.map((album) => {
            return (
              <AlbumCoverWithInfo
                albumId={album.mbid}
                title={album.name}
                artist={album.artist}
                albumCover={album.image[2]["#text"] || napoleon}
                // firstListen={album.firstListen}
                // loggedAt={album.loggedAt}
                // releaseYear={album.year}
                key={album.mbid}
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
