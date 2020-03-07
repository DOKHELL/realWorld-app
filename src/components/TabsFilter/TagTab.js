import React from 'react';
import {Link} from 'react-router-dom';

const TagTab = ({tag}) => {
  return (
    <>
      {tag &&
      <li className="nav-item">
        <Link className="nav-link active" to={{
          pathname: '/',
          search: `?tab=tag&tag=${tag}`
        }}><i className="ion-pound"/> {tag}</Link>
      </li>}
    </>
  );
};

export default TagTab;
