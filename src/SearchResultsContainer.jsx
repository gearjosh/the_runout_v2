import AlbumCoverWithInfo from './AlbumCoverWithInfo';

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
                albumId={album.id}
                title={album.title.split(" - ")[1]}
                artist={album.title.split(" - ")[0]}
                albumCover={album.cover_image}
                // firstListen={album.firstListen}
                // loggedAt={album.loggedAt}
                releaseYear={album.year}
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
