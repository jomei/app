import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Input, TextLink, Loading } from '../components/common';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

class Login extends Component {

  onPasswordChange = (pwd) => {
    this.props.passwordChanged(pwd);
  };

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onLoginPress = () => {
    const { email, password, loginUser } = this.props;

    loginUser(email, password);
  };

  onShowSignUp = () => {
    Actions.sign_up()
  };

  renderError = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  };

  render() {
    const { email, password, loading } = this.props;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={this.onEmailChange}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={this.onPasswordChange}
            />
          </View>


          {!loading ?
            <Button title="Login" onPress={this.onLoginPress} />
            :
            <Loading size={'large'} />}

        </View>
        <TextLink onPress={this.onShowSignUp }>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading, loginUser} = state.auth;
  return {
    email,
    password,
    error,
    loading,
    loginUser
  }
};

export default connect(mapStateToProps, actions)(Login);