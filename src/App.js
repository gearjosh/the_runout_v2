import { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import SearchResultsContainer from "./SearchResultsContainer";
import AlbumDetail from "./AlbumDetail";
import ProfileContainer from "./ProfileContainer";
import Homepage from "./Homepage";

import "./styles/normalize.css";
import "./styles/App.scss";

class App extends Component {
  
  // constructor(props) {
  //   super(props);
  // };

  render() {
    console.log("props: ", this.props);
    return (
      <div classname="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/searchresults" element={<SearchResultsContainer />} />
          <Route path="/albumdetail" element={<AlbumDetail />} />
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

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

export default withRouter(connect(mapStateToProps)(App));
