import napoleon from "./img/napoleon.png";

import "./styles/ArtistDetail.scss";

function ArtistDetail(props) {
  const info = props.artistInfo;
  const altText = "a photo of " + info.artist;

  return (
    <div>
      <div className="artistPhoto">
        <img
          src={
            info.image[5]["#text"] ||
            info.image[4]["#text"] ||
            info.image[3]["#text"] ||
            info.image[2]["#text"] ||
            info.image[1]["#text"] ||
            info.image[0]["#text"] ||
            napoleon
          }
          alt={altText}
        />
      </div>
    </div>
  );
}

export default ArtistDetail;
