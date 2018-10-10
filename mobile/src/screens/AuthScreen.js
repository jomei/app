import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import SignInForm from '../components/auth/signIn/Form'

class AuthScreen extends Component {
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
    }
  }
}

const mapStateToProps = state => {
  return {showSignIn: state.auth.showSignIn}
};

export default connect(mapStateToProps, {})(AuthScreen)