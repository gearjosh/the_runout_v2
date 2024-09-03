import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import Logo from './Logo';
import MagnifyingGlass from './MagnifyingGlass'

import './styles/Header.scss';

function Header(props) {
  // eslint-disable-next-line
  let _searchTerm;

  // function handleNewAlbumSearch(event) {
  //   const { dispatch } = props;
  //   event.preventDefault();
  //   dispatch(ACTION CREATOR GOES HERE())
  // }

  // const listenScrollEvent = (e) => {
  //   if (window.scrollY > 10) {
  //   } else {}
  // return (
  //   <div className="header">
  //     <div className="lilBar">
  //       <Link to="/">
  //         <Logo />
  //       </Link>
  //       <Link to="/profile" replace>
  //         Profile
  //       </Link>
  //       <Link to="#" replace>
  //         People
  //       </Link>
  //       <Link to="#" replace>
  //         Lists
  //       </Link>
  //       <form id="searchForm" className="search">
  //         <input
  //           placeholder="Search albums..."
  //           ref={(input) => {
  //             _searchTerm = input;
  //           }}
  //         />
  //         <button type="submit" className="magnifierSpace">
  //           <Link to="/searchresults">
  //             <MagnifyingGlass id="magnifier" />
  //           </Link>
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <div className="header">
      <div className="topBar">
        <Link to="/">
          <Logo />
        </Link>
        <p id="because">Every album deserves a listen.</p>
        <form id="searchForm" className="search">
          <input
            placeholder="Search albums..."
            ref={(input) => {
              _searchTerm = input;
            }}
          />
          <button type="submit" className="magnifierSpace">
            <Link to="/searchresults">
              <MagnifyingGlass id="magnifier" />
            </Link>
          </button>
        </form>
      </div>
      <div className="bottomBar">
        <Link to="/profile" replace>
          Profile
        </Link>
        <Link to="#" replace>
          People
        </Link>
        <Link to="#" replace>
          Lists
        </Link>
      </div>
    </div>
  );
};

export default Header;
