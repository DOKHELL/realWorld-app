import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


import testStore from './stores/testStore';

const stores = {
  testStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
