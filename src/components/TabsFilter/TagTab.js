import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStores} from '../../utils/use-stores';

const TagTab = ({tag}) => {
  const {articleStore} = useStores();

  return (
    <>
      {tag &&
      <li className="nav-item">
        <NavLink
          className="nav-link"
          isActive={() => (articleStore.params.tag && true)}
          to={{
            pathname: '/',
            search: `?tab=tag&tag=${tag}`
          }}><i className="ion-pound"/> {tag}</NavLink>
      </li>}
    </>
  );
};

export default TagTab;
