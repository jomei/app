import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Item extends Component {
  render() {
    const {item, onPress} = this.props;

    return(
      <View>
        <TouchableOpacity onPress={() => {onPress(item)}}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {},

};

export default Item