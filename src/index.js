import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

// every component is a function!
function Register() {
  return(
    <div>
      Video Registering Page
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/video" component={Register} exact />
      <Route path="/" component={App} exact />
      {/* if there is no route match */}
      <Route component={() => (<div> Error 404</div>)} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
