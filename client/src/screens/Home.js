import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import UserCard from '../components/UserCard'
import BoxList from '../components/box/BoxList'

export default class Home extends Component {
  render () {
    return (
      <Fragment>
        <View>
          <UserCard/>
        </View>
        <View>
          <BoxList/>
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