import React, { Component } from 'react';
import { View } from 'react-native';
import { Login, Registration } from '../components';

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    };

    this.whichForm = this.whichForm.bind(this);
    this.authSwitch = this.authSwitch.bind(this);
  }

  authSwitch() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  render() {
    return(
      <View style={styles.container}>
        {this.whichForm()}
      </View>
    );
  }

  whichForm() {
    if(!this.state.showLogin){
      return(
        <Registration authSwitch={this.authSwitch} newJWT={this.props.newJWT}/>
      );
    } else {
      return(
        <Login authSwitch={this.authSwitch} newJWT={this.props.newJWT}/>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
};