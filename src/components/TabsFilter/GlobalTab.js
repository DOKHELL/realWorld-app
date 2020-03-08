import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStores} from '../../utils/use-stores';

const GlobalTab = () => {
  const {articleStore} = useStores();

  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        isActive={() => (!articleStore.params.tag && true)}
        to={{
          pathname: '/',
          search: '?tab=all'
        }}>Global Feed</NavLink>
    </li>
  );
};

export default GlobalTab;
