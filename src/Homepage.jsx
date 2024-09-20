import AlbumCover from './AlbumCover';

import './styles/Homepage.scss';

function Homepage(props) {
  // console.log('homepage props:', props);
  
  if (props.listens) {
    return (
      <div className="albumGrid">
        {Object.keys(props.listens).map((albumId) => {
          let album = props.listens[albumId];
          return <AlbumCover
            albumId={albumId}
            title={album.title}
            artist={album.artist}
            albumCover={album.albumCover}
            firstListen={album.firstListen}
            loggedAt={album.loggedAt}
            key={albumId} />
        })}
      </div>
    );
  } else {
    return (
      <div className='albumGrid'><p>Loading...</p></div>
    )
  }
};

export default Homepage;
