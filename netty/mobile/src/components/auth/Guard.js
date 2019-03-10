import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import HomeScreen from 'mobile/src/components/home/Screen'

import AuthScreen from './Screen'

class Guard extends Component {
  render() {
    const {token} = this.props;
    if(token) {
      return(<HomeScreen/>)
    } else {
      return(<AuthScreen/>)
    }
  }
}

const mapStateToProps = state => {
  return {
    token: state.account.token
  }
};


export default connect(mapStateToProps, {})(Guard)