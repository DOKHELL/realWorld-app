import React from 'react';
import {Link} from 'react-router-dom';

const GlobalTab = () => {
  return (
    <li className="nav-item">
      <Link className="nav-link active" to={{
        pathname: '/',
        search: '?tab=all'
      }}>Global Feed</Link>
    </li>
  );
};

export default GlobalTab;
