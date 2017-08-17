import React, {Component} from 'react';

import catStore from "./Store/CatStore";
import HeaderRoute from "../components/HeaderRoute";
import FooterLayout from "../components/FooterLayout";

export class BodyLayout extends Component {

    
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }    

  constructor(){
    super();
    this.state  = {
        Articles: catStore.getAll(),
        imgURL : '',
        imgTitle : ''
    };
  }

  dataOnModal = (e) => {
    var myModal = document.getElementById("myModal");
    var myImg = e.target.src;
    var myHead = e.target.title;
    this.setState({imgURL: myImg, imgTitle : myHead}); 
  };
 
    
  render() {
     console.log('RANJAN DE', this.UserCred);
    const { Articles } = this.state;
    const listItems = Articles.map((Articles) =>
      <div className="col-xs-12 col-sm-10 col-md-4 col-lg-3 align-middle text-center article" key={Articles.title} >
        <img src={Articles.image} width="200px" height="200px" alt="Image" className="rounded btn btn-info btn-lg" title={Articles.name} data-toggle="modal" data-target="#myModal" onClick={this.dataOnModal}/>
      </div>
    );
   
    return (
    <div>
          <HeaderRoute UserCred={this.props.UserCred}/>   
          <div className="row">
              {listItems}
          </div>
          <br />

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">{this.state.imgTitle}</h4>
                </div>
                <div className="modal-body">
                  <p><img src={this.state.imgURL} width="100%" height="100%" alt="Image" /></p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>

     </div>          
    );
  }
}
export default BodyLayout;
