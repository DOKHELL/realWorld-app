import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useStores} from './use-stores';

const PrivateRoute = (props) => {
  const {userStore} = useStores();
  const {...restProps} = props;
  return (
    <>
      {userStore.currentUser ? <Route {...restProps}/>
        : <Redirect to="/" />};
    </>
  );
};

export default PrivateRoute;

