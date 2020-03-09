import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStores} from '../../utils/use-stores';

const YourTab = () => {
  const {articleStore} = useStores();
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        isActive={() => articleStore.params.tab === 'feed'}
        to={{
          pathname: '/',
          search: '?tab=feed'
        }}>Your Feed</NavLink>
    </li>
  );
};

export default YourTab;
