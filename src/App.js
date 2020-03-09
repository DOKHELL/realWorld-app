import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import {useStores} from './utils/use-stores';

const App = () => {
  const {userStore} = useStores();
  useEffect(() => {
    userStore.pullUser();
  }, []);
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
};

export default observer(App);
