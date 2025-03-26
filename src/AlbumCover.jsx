import { Link } from 'react-router-dom';


// import dopesmoker from './img/dopesmoker.jpg';

import './styles/AlbumCover.scss';

function AlbumCover(props) {
  const altText = "the album cover art for " + props.title + " by " + props.artist;
  return (
    <div className="albumCover" >
      <Link to="/albumdetail">
        <img src={props.albumCover} alt={altText}></img>
      </Link>
    </div>
  );
};

export default AlbumCover;
