import React, { Component } from 'react';
import { View, Text, ListView, Button,TouchableHighlight } from 'react-native';
import * as actions from "../../actions/Deposits";
import connect from "react-redux/es/connect/connect";

class DepositItem extends Component {
  render() {
    return(
      <TouchableHighlight
        onPress={() => {}}>
        <View>
          <Text>{item.amount}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  item = () => {
    return(this.props.list[this.props.id])
  }
}

const mapStateToProps = (state) => {
  return {list: state.deposits}
};

export default connect(mapStateToProps, actions)(DepositItem);