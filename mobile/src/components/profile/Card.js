import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'

import {TextLink} from "mobile/src/uiKit"

class Card extends Component {
  render() {
    const {container, email} = styles;
    const {user} = this.props;
    return (
      <View style={container}>
        <TextLink>Settings</TextLink>
        <TextLink>Contacts</TextLink>
        <View style={email}>
          <Text>{user.email}</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {},
  email: {}
};

const mapStateToProps = state => {
  return {
    user: state.account.user
  }
};

export default connect(mapStateToProps, {})(Card)