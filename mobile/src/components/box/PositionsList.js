import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, FlatList, Text} from 'react-native'

import {getMyParticipant} from "mobile/src/selectors";

import Item from './PositionItem'
import {selectPosition} from "./ducks";

class PositionsList extends Component {
  render() {
    const {list} = this.props;
    return(
      <View>
        <FlatList
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderItem = (item) => {
    return(<Item item={item.item} onPress={this.onItemPress}/>)
  };

  onItemPress = (position) => {
    this.props.selectPosition(getMyParticipant(), position)
  }
}

const mapStateToProps = state => {
  return {
    list: state.box.positions,
    participants: state.box.participants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectPosition: (participant, position) => {dispatch(selectPosition(participant, position))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsList)