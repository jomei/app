import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import * as actions from '../../ducks/auth/signIn'

class SignIn extends Component{
  render () {
    const {email, password, emailChanged, passwordChanged, signInUser } = this.props;
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
  return state.signIn
};

export default connect(mapStateToProps, actions)(SignIn)