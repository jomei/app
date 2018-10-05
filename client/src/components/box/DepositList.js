import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {FlatList} from 'react-native';
import DepositItem from "./DepositItem"

class DepositList extends Component {
  render() {
    return(
      <FlatList
      data={this.props.list}
      renderItem={({item}) => <DepositItem id={item.id}/>}
    />)
  }
}

const mapStateToProps = (state) => {
  return {list: state.deposits}
};

export default connect(mapStateToProps)(DepositList);