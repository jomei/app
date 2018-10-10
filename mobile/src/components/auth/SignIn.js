import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import * as actions from '../../ducks/auth/signIn'

class SignIn extends Component{
  render () {
    console.log(this.props);
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
          onPress={signInUser}
          title="Sign In"
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return state.signIn
};

export default connect(mapStateToProps, actions)(SignIn)