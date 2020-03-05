import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" href="">*/}
          {/*    <i className="ion-compose"/>&nbsp;New Post*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" href="">*/}
          {/*    <i className="ion-gear-a"/>&nbsp;Settings*/}
          {/*  </a>*/}
          {/*</li>*/}
          <li className="nav-item">
            <Link className="nav-link" to="/login">Sign in</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;