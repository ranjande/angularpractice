import React, {Component} from 'react';

export default class LoginWrapper extends React.Component{
        

        constructor(props){
                super(props);
                this.state = {uname: props.UserCred[0].userName, pass: this.props.UserCred[0].passWord, redirect: false, from: '/'};
        }



        onLoginAuthenticate = (e) => {
             e.preventDefault();  
             if(this.userNameInput.value === this.state.uname && this.passWordInput.value === this.state.pass){
                this.setState({redirect: true}); 
                const loggedIn = true;
                console.log(this.state.redirect, '  ', this.userNameInput.value, '  ', this.passWordInput.value);
               ReactDOM.render(
                        <div className="container">
                                <HeaderLayout UserName = {this.state.uname} />            
                                <BodyLayout title = {this.state.uname} />
                                <FooterLayout title={this.state.uname} UserCred = {this.state.uname} />
                        </div>
                , app);
             }else{
                 alert('Login Failure'); 
             }
        }

  render(){
  return (
    <div className="container">
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
                                                value="cat001"
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
                                                value="meaow"
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
  )};
}