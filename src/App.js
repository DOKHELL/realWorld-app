import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

@withRouter

class App extends Component {
  render() {
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
  }
}

export default App;
