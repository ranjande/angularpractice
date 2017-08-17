import React, {Component} from 'react';

export class FooterLayout extends Component {

  render() {
                    console.log('hello foo');
    return (
        <footer>
            &copy; 2017 {this.props.title}
        </footer>
    );
  }
}
export default FooterLayout;
