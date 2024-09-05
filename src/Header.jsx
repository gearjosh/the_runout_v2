import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';
import MagnifyingGlass from './MagnifyingGlass'

import './styles/Header.scss';
import { triggerAlbumSearch } from './actions';

function Header(props) {
  const searchInputRef = useRef('')

  const handleNewAlbumSearch = (e) => {
    const { dispatch } = props;
    e.preventDefault();
    if (searchInputRef.current.value) {      
      dispatch(triggerAlbumSearch(searchInputRef.current.value));
      searchInputRef.current.value = '';
    }
  }
  


  return (
    <div className="header">
      <div className="topBar">
        <Link to="/">
          <Logo />
        </Link>
        <p id="because">Every album deserves a listen.</p>
        <form onSubmit={handleNewAlbumSearch} id="searchForm" className="search">
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
