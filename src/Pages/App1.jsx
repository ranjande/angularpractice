import React, {Component} from 'react';

import HeaderLayout from "../components/HeaderLayout";
import BodyLayout from "../components/BodyLayout";
import FooterLayout from "../components/FooterLayout";

export default class AppLogin extends Component {

   constructor() {
    super();
    this.state = {title: 'Ranjan De'};
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
   /* setTimeout(() => {
      this.setState({title: 'How are you!'});
    }, 5000 )
   */



    return (
     <div className="wrap">
         <HeaderLayout title = {this.state.title} />            
         <BodyLayout changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
         <FooterLayout title = {this.state.title} />
      </div>
    );
  }
}
