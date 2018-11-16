import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Input, Button, TextLink } from 'mobile/src/uiKit'
import { switchForms } from 'mobile/src/components/auth/ducks'

import { signInUser, emailChanged, passwordChanged } from './ducks'

class Form extends Component{
  render () {
    const { email, password, emailChanged, passwordChanged, showSignUp } = this.props;
    return(
      <View>
        <Input
          onChangeText={ emailChanged }
          placeholder='email'
          value={ email }
        />

        <Input
          onChangeText={ passwordChanged }
          secureTextEntry={ true }
          placeholder='password'
          value={ password }
        />

        <Button onPress={ this.onSignInPress }>Sign In</Button>

        <TextLink onPress={ showSignUp }>
          Don't have an account? Register!
        </TextLink>

      </View>
    )
  }

  onSignInPress = () => {
    const {email, password} = this.props;
    this.props.signInUser(email, password)
  }
}

const mapStateToProps = state => {
  return state.auth.signIn
};

const mapDispatchToProps = dispatch => {
  return {
    emailChanged: (email) => { dispatch(emailChanged(email)) },
    passwordChanged: (pwd) => { dispatch(passwordChanged(pwd)) },
    signInUser: (email, password) => { dispatch(signInUser(email, password)) },
    showSignUp: () => { dispatch(switchForms(true))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)