import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header container d-flex">
      <h3 className="app-title">
        <a href="/">StarDB</a>
      </h3>
      <nav className="header-nav-menu col-6">
        <ul className="d-flex">
          <li><a href="#">People</a></li>
          <li><a href="#">Planets</a></li>
          <li><a href="#">Starships</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Secret</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;