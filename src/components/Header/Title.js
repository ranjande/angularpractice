import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Title extends Component {

  constructor(props){
      super(props);
      this.state = {
          uname : 'cat001', 
          pass : 'meaow', 
          isLogin : true, 
          pathActive : '/'
      };
  }  

  LogoutUser = (e) =>{
    e.preventDefault();
    this.setState({isLogin: false});
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <h1> Welcome { this.props.title } ! </h1>   
        </div>
        <div className="col-md-4 text-right">
          <button title="Log out" className="btn btn-danger" onClick={this.LogoutUser}>Logout</button>
        </div>
      </div>
    );
  }
}
export default Title;
