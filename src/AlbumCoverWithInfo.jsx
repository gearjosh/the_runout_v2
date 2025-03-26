import AlbumCover from './AlbumCover';
import { selectAlbum } from "./actions";
import { connect } from "react-redux";

import './styles/AlbumCoverWithInfo.scss';

function AlbumCoverWithInfo(props) {

  function handleNewAlbumSelection(id, cover, artist, year, title) {
    const { dispatch } = props;
    dispatch(selectAlbum(id, cover, artist, year, title));
  }
  
  return (
    <div className="albumCoverWithInfo" onClick={() => {handleNewAlbumSelection(props.albumId, props.albumCover, props.artist, props.releaseYear, props.title)}}>
      <AlbumCover
        albumId={props.albumId}
        albumCover={props.albumCover}
        key={props.albumId} />
      <div className="albumInfoBox">
        <ul>
          <li className="boldPText">{props.title}</li>
          <li>by {props.artist}</li>
          <br/>
          <li><em>Released {props.releaseYear}</em></li>
        </ul>
      </div>
    </div>
  );
};

export default connect()(AlbumCoverWithInfo);
