import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import {useStores} from './utils/use-stores';
import Settings from './page/Settings/Settings';
import Profile from './page/Profile/Profile';
import PrivatRoute from './utils/privatRoute';
import Loader from './components/Loader/Loader';


const App = () => {
  const {userStore, commonStore} = useStores();
  useEffect(() => {
    if (commonStore.token) {
      userStore.pullUser()
        .then(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, []);
  return (
    <div className="App">
      <Header/>
      {commonStore.appLoaded
        ? <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <PrivatRoute exact path='/settings' component={Settings}/>
          <Route path='/@:username' component={Profile}/>
          <Route path='/' component={Home}/>
        </Switch>
        : <Loader className="medium"/>
      }
      <Footer/>
    </div>
  );
};

export default observer(App);
