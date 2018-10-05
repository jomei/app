import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions/Deposits';
import connect from "react-redux/es/connect/connect";
import {View, Button, TextInput} from "react-native";

class CreateDeposit extends Component {

  onBackPress = () => {
    Actions.showBox()
  };

  onCreatePress = () => {
    const {title} = this.props;
    this.props.createBox(title);
  };

  render() {
    return(
      <View>

        <Button title="Create Deposit" onPress={this.onCreatePress}/>
        <Button title="Cancel" onPress={this.onBackPress}/>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return state.createBox;
};

export default connect(mapStateToProps, actions)(CreateDeposit);