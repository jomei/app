import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import { signInUser, emailChanged, passwordChanged } from './ducks'

class Form extends Component{
  render () {
    const {email, password, emailChanged, passwordChanged } = this.props;
    return(
      <View>
        <TextInput
          onChangeText={emailChanged}
          placeholder='email@example.com'
          value={email}
        />
        <TextInput
          onChangeText={passwordChanged}
          secureTextEntry={true}
          value={password}
        />

        <Button
          onPress={this.onSignInPress}
          title="Sign In"
        />
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
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Form)