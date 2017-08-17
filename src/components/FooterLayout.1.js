import React, {Component} from 'react';

export class FooterLayout extends Component {

  render() {
    return (
        <footer>
            &copy; 2017 {this.props.title} - Use Username as &nbsp;<span> {this.props.UserCred[0].userName}</span>&nbsp; and Password as &nbsp;<span> {this.props.UserCred[0].passWord}</span>
            <br />
        </footer>
    );
  }
}
export default FooterLayout;
