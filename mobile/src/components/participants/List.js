import React, {Component} from 'react'
import { connect } from 'react-redux';
import {FlatList} from 'react-native'
import {Actions} from 'react-native-router-flux';

import Item from './Item'


class List extends Component {

  render() {
    const {list} = this.props;
    return(
      <FlatList
      data={list}
      renderItem={this.renderItem}
      />
    )
  }

  renderItem = (item) => {
    return(<Item item={item.item} onPress={this.onItemPress}/>)
  };

  onItemPress = (item) => {
    Actions.box({boxId: item.id})
  }

}

const mapStateToProps = (state) => {
  return {
    list: state.participants.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)