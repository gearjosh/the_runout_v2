

import AlbumCover from './AlbumCover';
import AlbumCoreInfo from './AlbumCoreInfo';
import GenreTags from './GenreTags';
import BandMembers from './BandMembers';
import TrackList from './TrackList';
import ActionMenu from './ActionMenu';
// import AlbumCover4 from './AlbumCover4';

import './styles/AlbumDetail.scss';

function AlbumDetail(props) {
  // console.log('album detail props:',props);

  // rework this to not use listens
  return (
    <div className="albumDetail">
      <div className="albumDetailHead">
        <AlbumCover
          albumId={props.selectedAlbum.album}
          albumCover={props.selectedAlbum.albumCover}
          firstListen={props.selectedAlbum.firstListen}
          loggedAt={props.selectedAlbum.loggedAt}
          className="detailHeadElement"/>
        <div className="detailHeadElement">
          <AlbumCoreInfo
            title={props.selectedAlbum.title}
            artist={props.selectedAlbum.artist}
            releaseYear={props.selectedAlbum.releaseYear}/>
          <GenreTags/>
          <BandMembers/>
        </div>
        <div className="detailHeadElement">
          <TrackList/>
        </div>
        <div className="detailHeadElement">
          <ActionMenu/>
        </div>
      </div>
      <div className="albumDetailBody">

      </div>
    </div>
  );
};

export default AlbumDetail;
