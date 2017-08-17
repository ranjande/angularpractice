import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, history, location, link, browserHistory} from 'react-router';
import {Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Featured from '../Pages/Featured.js';
import Page1 from '../Pages/Page1.js';
import Page2 from '../Pages/Page2.js';
import reduxPract from '../Pages/reduxPract.js';


import Title from "./Header/Title";

const customHistory = createBrowserHistory();

export class HeaderLayout extends Component { 
   
  render() {
    
    return (
<div>
    <BrowserRouter>
     <div>
        <Switch>
                <Route path="/dashboard" name="dashboard" component={Page1} />
                <Route path="/users" name="users" component={Page2} />
                <Route path="/reduxPract" name="reduxPract" component={reduxPract} />
        </Switch>
     </div>
   </BrowserRouter>  
       <header>         
          <Title title={this.props.UserName} />     
       </header>  
</div>
    );
  }
}
export default HeaderLayout;
