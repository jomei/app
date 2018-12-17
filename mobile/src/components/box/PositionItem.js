import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class PositionItem extends Component {
  render() {
    const {item, onPress} = this.props;

    return(
      <View>
        <TouchableOpacity onPress={onPress(item)}>
          <Text>{item.title}</Text>
          <Text>{item.amount.amount} {item.amount.currency}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default PositionItem