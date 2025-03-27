import AlbumCover from './AlbumCover';
import { selectAlbum } from "./reducers/selectSlice.js";

import { connect } from "react-redux";

import './styles/AlbumCoverWithInfo.scss';
import { fetchAlbumInfo } from "./reducers/albumInfoSlice.js";
import { useNavigate } from 'react-router-dom';

function AlbumCoverWithInfo(props) {
  const navigate = useNavigate()

  function handleNewAlbumSelection(id) {
    const { dispatch } = props;
    dispatch(selectAlbum(id));
    dispatch(fetchAlbumInfo(id)).then(() => navigate("/albumdetail"))
  }

  return (
    <div className="albumCoverWithInfo" onClick={() => {handleNewAlbumSelection(props.albumId)}}>
      <AlbumCover
        albumId={props.albumId}
        albumCover={props.albumCover}
        key={props.albumId} />
      <div className="albumInfoBox">
        <ul>
          <li className="boldPText">{props.title}</li>
          <br/>
          <li>by {props.artist}</li>
        </ul>
      </div>
    </div>
  );
};

export default connect()(AlbumCoverWithInfo);
