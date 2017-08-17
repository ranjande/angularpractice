import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Title from "./Header/Title";

export class HeaderRoute extends Component { 

  constructor(props){
    super(props);
    this.state = {
      uname: props.UserCred.uname,
      pass: this.props.UserCred.pass,
      isLogin: this.props.UserCred.isLogin,
      pathActive: this.props.UserCred.pathActive 
    }
  }

  navigatePush(){
    console.log(this.props);
    this.history.push('/');
  }


  navigateReplace(e){
    console.log('case ', this.state);
  }

  render() {
    console.log('Changing...',this.state);
    return (
       <header>        
         <Title title={this.props.UserCred.uname} />
         <nav className="btn-group btn-group-justified"> 
                <Link to="/" className="btn btn-primary" onClick = {this.navigateReplace} >Dashboard</Link>
                <Link to="AxiosComponent" className="btn btn-primary" title={this.props.title} >Add & Delete Track</Link>
                <Link to="featured" className="btn btn-primary">Feature</Link>  
                <Link to="users" className="btn btn-primary">Admin</Link>            
          </nav>          
       </header>   
    );
  }
}
export default HeaderRoute;
