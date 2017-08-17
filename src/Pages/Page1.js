import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { EventEmitter } from "events";

import dispatcher from "./Dispatcher";
import HeaderRoute from "../components/HeaderRoute";
import FooterLayout from "../components/FooterLayout";

export class AxiosComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /*
      uname: props.UserCred.uname, 
      pass: this.props.UserCred.pass, 
      isLogin: this.props.UserCred.isLogin, 
      pathActive: '/',
      */
      title: 'Axios Page',
      Articles : [],
      imgURL : '',
      imgTitle : ''
     }; 
  }

  componentDidMount() {
   // axios.get('https://jsonplaceholder.typicode.com/photos')
   axios.get('vendor/public_json/articles.json')
    .then(res => this.setState({ Articles: res.data }))
    .catch(err => console.log(err))
}


  addData = (event) => {
      event.preventDefault();
      let randid = Math.random();
      let albumNo = this.albumNumber.value;
      let albumTitle = this.albumTitle.value;
      let newData = {
              "albumId": albumNo,
              "id": randid,
              "title": albumTitle,
              "url": "http://placehold.it/600/92c952",
              "thumbnailUrl": "http://placehold.it/150/92c952"
       }
      this.setState(
        {
          Articles : this.state.Articles.concat([newData])
       });
   }

   delData = (event) => {
     event.preventDefault();
     let Art = this.state.Articles;
     let ids = event.target.title;
     let cs = confirm('Do you want to delete Track Id'+ ids+'?');
     if(cs == true){
        Art.forEach(this.searchArt = (ids, index) =>{
          if(Art[index].id == event.target.title){
                  // console.log(index+'    Test ID'+ids.id+'  ****  '+Art[index].title);
                    Art.splice(index, 1);
          }   
        }, ids);
        this.setState(
        {
            Articles : Art
        });
     }
   }

  dataOnModal = (e) => {
      var myModal = document.getElementById("myModal");
      var myImg = e.target.src;
      var myHead = e.target.title;
      this.setState({imgURL: myImg, imgTitle : myHead}); 
  };

  
  render() {
    let listItems = <img src="../assets/images/loading.gif" width="50px" />

    const headerStyle = {
      backgroundColor: 'orange',
      fontSize: '0.9em',
      fontWeight : 'bold'

    };

     const boxStyle = {
      width : '250px',
      height : '250px'
    }

    const numberSize = {
      width: '75px',
      height: '30px',
      fontSize: '0.6em'
    }

   const textSize = {
      width: '300px',
      height: '30px',
      fontSize: '0.6em'
    }

    const boxStyleFooter = {
      fontSize: '0.5em',
    }
        const { Articles } = this.state;
        console.log(this.state);
          listItems = Articles.map((Articles) =>  
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4" key={Articles.id} >
                  <div className="panel panel-success" style={boxStyle}>
                      <div className="panel-heading">
                          <div className="row">
                            <div className="col-md-10 text-left text-bold">Album :{Articles.albumId} ({Articles.id}) </div>
                            <div className="col-md-2 text-right">
                              <button title={Articles.id} className="btn-xs btn-danger" onClick={this.delData}> X </button>
                            </div>
                          </div>
                      </div>
                      <div className="panel-body">
                          <img src={Articles.thumbnailUrl} width="100px" height="100px" alt={Articles.title} className="rounded btn btn-info btn-lg" title={Articles.title} data-toggle="modal" data-target="#myModal" onClick={this.dataOnModal}/>
                      </div>
                      <div className="panel-footer" style={boxStyleFooter}>{Articles.title}</div>
                  </div>
              </div>
          );
  
    const query = this.props.location;

    return (
     <div className="container">
        <HeaderRoute UserCred={this.props}/>
        <div className="row" style={headerStyle}>
            <form className="form-inline">
                <div className="col-md-3" title={query.pathname}>No of Records: {Articles.length}</div>
                <div className="col-md-2 text-right form-inline">
                    <div className="form-group">
                        <label htmlFor="albumNumber">Album ID: </label>&nbsp;&nbsp; 
                        <input type="number" name="albumNumber" style={numberSize} required ref={(input) => this.albumNumber = input} />&nbsp;&nbsp; 
                    </div>
                </div>
                <div className="col-md-5 form-inline ">
                    <div className="form-group">
                      <label htmlFor="albumTitle">Album Title: </label>&nbsp;&nbsp; 
                      <input type="text" name="albumTitle" style={textSize} required ref={(input) => this.albumTitle = input} />&nbsp;&nbsp; 
                    </div>   
                </div>
                <div className="col-md-2 form-inline">      
                      <input type="button" className="btn btn-success" onClick={this.addData} value=" Add New Track"/>
                </div>
            </form>
         </div>        
         <div className="row">
              {listItems} 
          </div>
  

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
export default AxiosComponent;
