import React, { Component } from 'react'
import {View, FlatList} from 'react-native'

import Item from './PositionItem'

class PositionsList extends Component {
  render() {
    const {positions} = this.props;
    return(
      <View>
        <FlatList
          data={positions}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderItem = (item) => {
    return(<Item item={item.item} onPress={this.props.onItemPress}/>)
  };
}


export default PositionsList