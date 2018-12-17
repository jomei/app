import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import SignInForm from 'mobile/src/components/auth/signIn/Form'
import SignUpForm from 'mobile/src/components/auth/signUp/Form'


class Screen extends Component {
  render() {
    return(
      <View>
        {this.renderForm()}
      </View>
    )
  }

  renderForm = () => {
    if(this.props.showSignIn) {
      return(<SignInForm/>)
    } else {
      return(<SignUpForm/>)
    }
  }
}

const mapStateToProps = state => {
  return {showSignIn: state.auth.showSignIn}
};

export default connect(mapStateToProps, {})(Screen)