import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import VideoRegistration from './pages/Registration/Video';
import CategoryRegistration from './pages/Registration/Category';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/registration/video" component={VideoRegistration} exact />
      <Route path="/registration/category" component={CategoryRegistration} exact />
      <Route path="/" component={Home} exact />
      {/* if there is no route match */}
      <Route component={() => (<div> Error 404</div>)} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
