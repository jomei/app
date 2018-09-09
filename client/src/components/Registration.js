import React, {Component, Fragment} from 'react';
import { View, Text } from 'react-native';
import { Input, TextLink, Button, Loading } from './common';

import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      error: '',
      loading: false
    };

    this.registerUser= this.registerUser.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.onRegistrationFail = this.onRegistrationFail.bind(this);
  }

  registerUser() {
    const { email, password, password_confirmation } = this.state;

    this.setState({ error: '', loading: true });

    fetch('http://539c090b.ngrok.io/api/v1/sign_up', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        user: {email: email,
          password: password,
          password_confirmation: password_confirmation}
      }),
    })
      .then(this.handleResponse)
      .catch((error) => {
        console.log(error);
        this.onRegistrationFail();
      });
  }

  onRegistrationFail() {
    this.setState({
      error: 'Registration Failed',
      loading: false
    });
  }

  handleResponse(response) {
    if(response.status === 422) { this.onRegistrationFail() }
    response.json().then((data) => {
      if(data.errors) {
        return this.onRegistrationFail()
        // TODO: handle this
      }

      deviceStorage.save("id_token", data.jwt);
      this.props.newJWT(data.jwt);
    })

  }

  render() {
    const { email, password, password_confirmation, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="confirm password"
              label="Confirm Password"
              value={password_confirmation}
              onChangeText={password_confirmation => this.setState({ password_confirmation })}
            />
          </View>
          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button onPress={this.registerUser}>
              Register
            </Button>
            :
            <Loading size={'large'} />}
        </View>

        <TextLink onPress={this.props.authSwitch}>
          Already have an account? Log in!
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
export { Registration };