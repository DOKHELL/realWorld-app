import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStores} from '../../utils/use-stores';

const FavoriteTab = () => {
  const {articleStore, userStore} = useStores();
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        isActive={() => articleStore.params.tab === 'favorites'}
        to={`/@${userStore.currentUser.username}/favorites`}>Favorited Articles</NavLink>
    </li>
  );
};

export default FavoriteTab;
