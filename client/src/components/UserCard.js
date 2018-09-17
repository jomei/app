import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as actions from '../actions';
import connect from "react-redux/es/connect/connect";


class UserCard extends Component {
  render () {
    const user = this.props.user;
    return (
      <View>
        <Text style={{fontSize: 18, color: 'blue'}}>{ user.email }</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.auth.user}
};

export default connect(mapStateToProps, actions)(UserCard);