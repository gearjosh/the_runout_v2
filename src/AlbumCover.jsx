import './styles/AlbumCover.scss';
import napoleon from "./img/napoleon.png";

function AlbumCover(props) {
  const altText = "the album cover art for " + props.title + " by " + props.artist;
  return (
    <div className="albumCover" >
      <img src={props.albumCover ||} alt={altText}></img>
    </div>
  );
};

export default AlbumCover;
