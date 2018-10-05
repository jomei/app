import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import connect from "react-redux/es/connect/connect";
import {View, Button, TextInput, Text, ListView} from "react-native";
import {Input, Loading} from "../common";
import DepositList from './DepositList'

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
    const {title, total, participant} = this.props.box;
    return(
      <View>
        <View><Text>{title} - {total} RUR</Text></View>
        {this.renderDeposits()}
        <Input
          placeholder="user@email.com"
          label="Email"
          value={participant}
          onChangeText={this.onEmailChange}
        />
        <Button title="Add participant" onPress={this.onAddPress}/>
      </View>
    )
  };

  renderDeposits = () => {
    return(
      <View>
        <DepositList/>
        <Button title="Create Deposit" onPress={this.onCreatePress} />
      </View>
    )
  };

  onCreatePress = () => {

  };


  onAddPress = () => {
    this.props.addParticipant(this.props.box.id, this.props.participant)
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(ShowBox);