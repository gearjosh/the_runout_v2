

// import './styles/TrackList.scss';

function TrackList(props) {

  return (
    <div className="trackList">
      <h3>Track List</h3>
      <ol>
        {props.tracks.map((track, i) => <li key={i}>{track.name}</li>)}
      </ol>
    </div>
  );
};

export default TrackList;
