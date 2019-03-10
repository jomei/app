import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'

import {TextLink} from "mobile/src/uiKit"

class Card extends Component {
  render() {
    const {container, email, header, headerLink} = styles;
    const {user} = this.props;
    return (
      <View style={container}>
        <View style={header}>
          <TextLink>Settings</TextLink>
          <TextLink>Contacts</TextLink>
        </View>
        <View style={email}>
          <Text>{user.email}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    height: 80,
    padding: 10
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLink: {},
  email: {}
};

const mapStateToProps = state => {
  return {
    user: state.account.user
  }
};

export default connect(mapStateToProps, {})(Card)