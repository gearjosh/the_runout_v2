import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';
import MagnifyingGlass from './MagnifyingGlass'

import './styles/Header.scss';
import { fetchAlbums } from './reducers/albumSearchSlice.js';

function Header(props) {
  const searchInputRef = useRef('')
  const navigate = useNavigate();

  const useAlbumSearch = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    if (searchInputRef.current.value) {      
      dispatch(fetchAlbums(searchInputRef.current.value)).then(() => {
        searchInputRef.current.value = '';
        navigate("/searchresults");
      });
    }
  };
  


  return (
    <div className="header">
      <div className="topBar">
        <Link to="/">
          <Logo />
        </Link>
        <p id="because">Every album deserves a listen.</p>
        <form onSubmit={useAlbumSearch} id="searchForm" className="search">
          <input
            placeholder="Search albums..."
            ref={searchInputRef}
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

export default connect()(Header);
