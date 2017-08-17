// Application entrypoint.

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
//import App1 from 'App1';
//import {PieChart} from 'react-easy-chart';

import {Router, IndexRoute, history, location, link, browserHistory, Redirect } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Featured from './Pages/Featured.js';
import AxiosComponent from './Pages/Page1.js';
import Page2 from './Pages/Page2.js';

const customHistory = createBrowserHistory();


// React Custom component
import HeaderRoute from "./components/HeaderRoute";
import HeaderLayout from "./components/HeaderLayout";
import BodyLayout from "./components/BodyLayout";
import FooterLayout from "./components/FooterLayout";

export class LoginContainer extends React.Component {

        constructor(props){
                super(props);
                this.state = {
                        uname: props.UserCred.uname, 
                        pass: this.props.UserCred.pass, 
                        isLogin: this.props.UserCred.isLogin, 
                        pathActive: '/'
                };
        }

        onLoginAuthenticate = (e) => {
             e.preventDefault();  
             if(this.userNameInput.value === this.state.uname && this.passWordInput.value === this.state.pass){
                this.setState({isLogin: true}); 
                //const loggedIn = true;
                console.log(this.state.isLogin, '  ', this.userNameInput.value, '  ', this.passWordInput.value);
                this.props.onChangeDT(true);
             }else{
                 alert('Login Failure'); 
             }
        }
                  


        render(){
                console.log(this.props.isLogin)
                if(this.props.isLogin == false)
                        return(                 
                                <div className="text-center">
                                <div className="row">
                                        <div className="col-md-6">
                                        <div className="panel with-nav-tabs panel-info">
                                        <div className="panel-heading">
                                        <ul className="nav nav-tabs">
                                                <li className="active"> Login </li>
                                        </ul>
                                        </div>

                                        <div className="panel-body">
                                                <form onSubmit={this.onLoginAuthenticate}>
                                        <div className="tab-content">
                                                <div id="login" className="tab-pane fade in active register">
                                                <div className="container-fluid">
                                                        <div className="row">
                                                        <h2 className="text-center"> <strong> Login  </strong></h2><hr />

                                                        <div className="row">
                                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                                <div className="form-group">
                                                                <div className="input-group">
                                                                        <div className="input-group-addon">
                                                                        <span className="glyphicon glyphicon-user"></span>
                                                                        </div>
                                                                        <input type="text" 
                                                                                ref={(input) => this.userNameInput = input}
                                                                                placeholder="User Name" 
                                                                                name="uname" 
                                                                                className="form-control" 
                                                                                required 
                                                                        />
                                                                </div>
                                                                </div>
                                                                </div>
                                                        </div>

                                                        <div className="row">
                                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                                <div className="form-group">
                                                                <div className="input-group">
                                                                        <div className="input-group-addon">
                                                                        <span className="glyphicon glyphicon-lock"></span>
                                                                        </div>
                                                                        <input type="password" 
                                                                                ref={(input) => this.passWordInput = input}
                                                                                placeholder="Password" 
                                                                                name="pass" 
                                                                                className="form-control" 
                                                                                required 
                                                                        />
                                                                </div>
                                                                </div>
                                                                </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                                <button type="submit" className="btn btn-success btn-block btn-lg" > Login </button>
                                                                </div>
                                                        </div>
                                                        </div>
                                                </div> 
                                                </div>
                                        </div>
                                                </form>
                                        </div>
                                        </div>
                                </div>
                                </div>
                                </div>
                ) 
                else
                  return(
                        <div className="wrapper">  
                                <BodyLayout UserCred={this.state} /> 
                        </div>
                 ) 
        };
}

export default class App extends React.Component {   

        constructor(){
           super();
           this.state = {
               uname : 'cat001', 
               pass : 'meaow', 
               isLogin : false, 
               pathActive : '/'
           };
        }

        setLogDetails = (isVal) => {
           this.setState({isLogin: isVal });
        }

        render(){
                return(
                        <div className="container"> 
                                <LoginContainer UserCred={this.state} onChangeDT={this.setLogDetails} isLogin = {this.state.isLogin}/>
                                <FooterLayout title = "ReactApp Simple Example by Ranjan De" UserCred={this.state}/>
                        </div>
                )
        };
}

const app = document.getElementById('react-root');

ReactDOM.render(
     <BrowserRouter>
     <div>
        <Switch>
                <Route exact path="/" component={App} />
                <Route path="/AxiosComponent" name="AxiosComponent" component={AxiosComponent} />
                <Route path="/users" name="users" component={Page2} />
                <Route path="/featured" name="Featured" component={Featured} />
        </Switch>
     </div>
   </BrowserRouter>   
, app);
