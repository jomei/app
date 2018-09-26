import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import connect from "react-redux/es/connect/connect";
import {View, Button, TextInput, Text} from "react-native";
import {Loading} from "../common";

class ShowBox extends Component {

  componentDidMount() {
    this.props.loadBox(this.props.box.id);
  }

  render() {
    if (this.props.loading) {
      return (
        <Loading size={'large'} />
      );
    }
    return(this.renderBox())
  }

  renderBox = () => {
    const {title, participants, total} = this.props.box;
    return(
      <View>
        <Text>{title}</Text>
      </View>
    )
  }

}
const mapStateToProps = (state) => {
  return state.createBox;
};

export default connect(mapStateToProps, actions)(ShowBox);