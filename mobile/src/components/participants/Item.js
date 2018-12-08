import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Item extends Component {
  render() {
    const {item, onPress} = this.props;

    return(
      <View>
        <TouchableOpacity onPress={() => {onPress(item)}}>
          <Text>{item.box.title}</Text>
          <Text>{item.paid_amount.amount} {item.paid_amount.currency}</Text>
          <Text>{item.assigned_amount.amount} {item.assigned_amount.currency}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {},
  row: {}

};

export default Item