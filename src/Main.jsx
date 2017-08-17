// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, history, location, link, browserHistory} from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './Pages/App.jsx';
import Featured from './Pages/Featured.js';
import Page1 from './Pages/Page1.js';
import Page2 from './Pages/Page2.js';
import reduxPract from './Pages/reduxPract.js';

const app = document.getElementById('react-root');

const customHistory = createBrowserHistory();

console.log('Rendered..');

ReactDOM.render(
     <BrowserRouter>
     <div>
        <Switch>
                <Route exact path="/" component={App} />
                <Route path="/dashboard" name="dashboard" component={Page1} />
                <Route path="/users" name="users" component={Page2} />
                <Route path="/reduxPract" name="reduxPract" component={reduxPract} />
        </Switch>
     </div>
   </BrowserRouter>    
, app);