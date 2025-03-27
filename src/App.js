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
          <Route path="/searchresults" element={<SearchResultsContainer albumSearch={this.props.albumSearch} listens={this.props.listens} />} />
          <Route path="/albumdetail" element={<AlbumDetail albumInfo={this.props.albumInfo.info}
          id={this.props.selected} />} />
          <Route path="/profile" element={<ProfileContainer listens={this.props.listens} />} />
        </Routes>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    listens: state.listens,
    albumSearch: state.albumSearch,
    albumInfo: state.albumInfo,
  };
};

export default connect(mapStateToProps)(App);
