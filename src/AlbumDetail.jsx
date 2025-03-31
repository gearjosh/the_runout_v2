import AlbumCover from './AlbumCover';
import AlbumCoreInfo from './AlbumCoreInfo';
import GenreTags from './GenreTags';
// import BandMembers from './BandMembers';
import TrackList from './TrackList';
import ActionMenu from './ActionMenu';
// import AlbumCover4 from './AlbumCover4';

import './styles/AlbumDetail.scss';

function AlbumDetail(props) {
  console.log('album detail props:',props);
  const info = props.albumInfo

  // rework this to not use listens
  return (
    <div className="albumDetail">
      <div className="albumDetailHead">
        <AlbumCover
          albumId={props.id}
          albumCover={
            info.image[5]["#text"] ||
            info.image[4]["#text"] ||
            info.image[3]["#text"] ||
            info.image[2]["#text"] ||
            info.image[1]["#text"] ||
            null
          }
          title={info.name}
          artist={info.artist}
          className="detailHeadElement"
        />
        <div className="detailHeadElement">
          <AlbumCoreInfo
            title={info.name}
            artist={info.artist}
            releaseDate={info.wiki.published.split(",")[0]}
          />
          <GenreTags tags={info.tags.tag} />
          {/* <BandMembers /> */}
        </div>
        <div className="detailHeadElement">
          <TrackList tracks={info.tracks.track} />
        </div>
        <div className="detailHeadElement">
          <ActionMenu />
        </div>
      </div>
      <div className="albumDetailBody">{info.wiki.summary.split("<a")[0]}</div>
    </div>
  );
};

export default AlbumDetail;
