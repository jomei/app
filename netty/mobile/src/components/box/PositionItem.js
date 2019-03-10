import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {TextLink} from "mobile/src/uiKit";

class PositionItem extends Component {
  render() {
    const {item, onPress} = this.props;

    return(
      <View>
        <TouchableOpacity onPress={onPress(item)}>
          <Text>{item.title}</Text>
          <Text>{item.amount.amount} {item.amount.currency}</Text>
          { this.renderPaid() }
        </TouchableOpacity>
      </View>
    )
  }

  renderPaid = () => {
    const {participant, item} = this.props;

    if(participant.is_admin) {
      return(this.renderCheckbox())
    } else {
      return(<Text>{item.is_paid ? "Paid" : 'Not paid'}</Text>)
    }
  };

  renderCheckbox = () => {
    const {item} = this.props;

    if(item.is_paid) {
      return(<TextLink>Paid</TextLink>)
    } else {
      return(<TextLink>Not Paid</TextLink>)
    }
  }
}


export default PositionItem