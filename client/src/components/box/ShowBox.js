import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import connect from "react-redux/es/connect/connect";
import {View, Button, TextInput, Text} from "react-native";
import {Loading} from "../common";

class ShowBox extends Component {

  render() {
    if (this.props.loading) {
      return (
        <Loading size={'large'} />
      );
    }
    return(this.renderBox())
  }

  renderBox = () => {

    const {title, deposits, total} = this.props.box;
    return(
      <View>
        <Text>{title} - {total} RUR</Text>
      </View>
    )
  }

}
const mapStateToProps = (state) => {
  return state.showBox;
};

export default connect(mapStateToProps, actions)(ShowBox);