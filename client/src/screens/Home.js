import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import { Button, Loading } from '../components/common/';
import UserCard from '../components/UserCard'

export default class Home extends Component {
  render () {
    const { user } = styles;

    return (
      <Fragment>
        <View>
          <UserCard/>
        </View>
      </Fragment>
    )
  }
}


const styles = {
  user: {
    height: '30%'
  }
};