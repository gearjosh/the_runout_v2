import { fetchArtistInfo } from "./reducers/artistInfoSlice.js"
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './styles/AlbumCoreInfo.scss'; 

function AlbumCoreInfo(props) {
  const navigate = useNavigate()

  const handleGetArtistInfo = (artist) => {
    const { dispatch } = props;
    dispatch(fetchArtistInfo(artist)).then(() => navigate("/artistdetail"))
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <h2 onClick={() => {handleGetArtistInfo(props.artist)}}>by {props.artist}</h2>
      <h3>
        <em>Released {props.releaseDate}</em>
      </h3>
    </div>
  );
};

export default connect()(AlbumCoreInfo);
