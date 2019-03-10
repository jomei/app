import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Input, Button, TextLink } from 'mobile/src/uiKit'
import { switchForms } from 'mobile/src/components/auth/ducks'

import {emailChanged, passwordChanged, passwordConfirmationChanged, signUpUser} from "./ducks";


class Form extends Component {
  render () {
    const {
      email, password, passwordConfirmation,
      emailChanged, passwordChanged, passwordConfirmationChanged,
      showSignIn
    } = this.props;

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

        <Input
          onChangeText={ passwordConfirmationChanged }
          secureTextEntry={ true }
          placeholder='password confirmation'
          value={ passwordConfirmation }
        />

        <Button onPress={ this.onSignUpPress }>SignUp</Button>

        <TextLink onPress={ showSignIn }>
          Already have account? Sign in!
        </TextLink>

      </View>
    )
  }

  onSignUpPress = () => {
    const {email, password, passwordConfirmation} = this.props;
    this.props.signUpUser(email, password, passwordConfirmation)
  }
}

const mapStateToProps = state => {
  return state.auth.signUp
};

const mapDispatchToProps = dispatch => {
  return {
    emailChanged: (email) => { dispatch(emailChanged(email)) },
    passwordChanged: (pwd) => { dispatch(passwordChanged(pwd)) },
    passwordConfirmationChanged: (pwd) => { dispatch(passwordConfirmationChanged(pwd)) },
    signUpUser: (email, password, passwordConfirmation) => { dispatch(signUpUser(email, password, passwordConfirmation)) },
    showSignIn: () => { dispatch(switchForms(false))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)