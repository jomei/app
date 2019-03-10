import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Item extends Component {
  render() {
    const {item, onPress} = this.props;
    const {container, row} = styles;
    return(
      <View>
        <TouchableOpacity style={container} onPress={() => {onPress(item)}}>
          <Text style={row}>{item.box.title}</Text>
          <Text style={row}>{item.paid_amount.amount} {item.paid_amount.currency}</Text>
          <Text style={row}>{item.assigned_amount.amount} {item.assigned_amount.currency}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row: {
    height: 35,
    width: 50
  }

};

export default Item