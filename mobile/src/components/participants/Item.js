import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Item extends Component {
  render() {
    const {item} = this.props;

    return(
      <View>
        <Text>item.title</Text>
      </View>
    )
  }
}

const styles = {
  container: {},

};

export default Item