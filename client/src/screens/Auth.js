import React, { Component } from 'react';
import { View } from 'react-native';
import { Login, Registration } from '../components';

export default class Auth extends Component {
  render() {
    return(
      <View style={styles.container}>
        {this.whichForm()}
      </View>
    );
  }

  whichForm = () => {
    if(!this.props.showLogin){
      return(
        <Registration newJWT={this.props.newJWT}/>
      );
    } else {
      return(
        <Login newJWT={this.props.newJWT}/>
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