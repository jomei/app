import React, {Component} from 'react'
import { connect } from 'react-redux';
import {FlatList} from 'react-native'

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
    return()
  }

}

const mapStateToProps = (state) => {
  return {
    list: state.participants.list
  }
};

export default connect(mapStateToProps, {})(List)