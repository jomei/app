import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Form from 'mobile/src/components/auth/signIn/Form'
import SignUpForm from 'mobile/src/components/auth/signUp/Form'


class AuthScreen extends Component {
  render() {
    return(
      <View>
        {this.renderForm()}
      </View>
    )
  }

  renderForm = () => {

    // if(this.props.showSignIn) {
      return(<Form/>)
    // }
  }
}

const mapStateToProps = state => {
  return {showSignIn: state.auth.showSignIn}
};

export default connect(mapStateToProps, {})(AuthScreen)