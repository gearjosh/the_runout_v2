
import './styles/GenreTags.scss';

function GenreTags(props) {
  return (
    <div>
      {props.tags.map((tag) => (
        <span key={tag.name} className="genreTag unselectable">{tag.name}</span>
      ))}

      {/* <button className="genreTag unselectable addGenreButton">+</button> */}
    </div>
  );
};

export default GenreTags;
