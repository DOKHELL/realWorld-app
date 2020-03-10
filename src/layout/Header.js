import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import {useStores} from '../utils/use-stores';

const Header = () => {
  const {userStore: {currentUser}} = useStores();
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          {currentUser
            ? <>
              <li className="nav-item">
                <Link to="/editor" className="nav-link">
                  <i className="ion-compose" />&nbsp;New Post
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  <i className="ion-gear-a" />&nbsp;Settings
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/@${currentUser.username}`}
                  className="nav-link"
                >
                  <img src={currentUser.image} className="user-pic" alt="" />
                  {currentUser.username}
                </Link>
              </li>
            </>
            : <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign up</Link>
              </li>
            </>}
        </ul>
      </div>
    </nav>
  );
};

export default observer(Header);