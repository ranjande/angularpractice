import React, {Component} from 'react';

import HeaderRoute from "../components/HeaderRoute";
import FooterLayout from "../components/FooterLayout";

class Featured extends React.Component {
  constructor() {
    super();
    let underconst = "../assets/images/under-construction.gif";
    this.state = {title: 'Admin Page', status : underconst};
  }

  render() {
    return (
     <div className="container">
         <HeaderRoute UserCred={this.state} />
         <img src={this.state.status} width="300px" height="300px" />
          <div className="row">
            <ul className="pagination">
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
            </ul>
        </div> 
       <FooterLayout title = "ReactApp Simple Example by Ranjan De" UserCred={this.state}/>
      </div>
    );
  }
}
export default Featured;
