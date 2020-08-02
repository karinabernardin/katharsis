import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Register from './pages/Register/Video'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/video" component={Register} exact />
      <Route path="/" component={Home} exact />
      {/* if there is no route match */}
      <Route component={() => (<div> Error 404</div>)} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
