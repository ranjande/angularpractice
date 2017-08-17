import React, {Component} from 'react';

import HeaderRoute from "../components/HeaderRoute";
import BodyLayout from "../components/BodyLayout";
import FooterLayout from "../components/FooterLayout";

class App extends Component {

   constructor() {
    super();
    this.state = {title: ''};
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
    return (
     <div className="wrap">
         <HeaderRoute title = {this.state.title} />            
         <BodyLayout changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
         <FooterLayout title = "ReactApp Simple Example by Ranjan De" UserCred={this.state.credential}/>
      </div>
    );
  }
}
export default App;
