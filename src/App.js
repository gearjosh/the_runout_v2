import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import SearchResultsContainer from "./SearchResultsContainer";
import AlbumDetail from "./AlbumDetail";
import ProfileContainer from "./ProfileContainer";
import Homepage from "./Homepage";

import "./styles/App.scss";

class App extends Component {
  
  // constructor(props) {
  //   super(props);
  // };

  render() {
    console.log("app props: ", this.props);
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage listens={this.props.listens} />} />
          <Route path="/searchresults" element={<SearchResultsContainer />} />
          <Route path="/albumdetail" element={<AlbumDetail selectedAlbum={this.props.selectedAlbum}
          listens={this.props.listens} />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedAlbum: state.selectedAlbum,
    listens: state.listens,
  };
};

export default connect(mapStateToProps)(App);
