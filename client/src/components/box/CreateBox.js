import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import connect from "react-redux/es/connect/connect";
import {View, Button, TextInput} from "react-native";

class CreateBox extends Component {

  onBackPress = () => {
    Actions.home()
  };

  onCreatePress = () => {
    const {title} = this.props;
    this.props.createBox(title);
  };

  render() {
    const {title, boxTitleChanged} = this.props;
    return(
      <View>
        <View>
          <TextInput
            placeholder="box name"
            label="Name"
            value={title}
            onChangeText={boxTitleChanged}
          />
        </View>
        <Button title="Create Box" onPress={this.onCreatePress}/>
        <Button title="Cancel" onPress={this.onBackPress}/>
    </View>
    )
  }
}
const mapStateToProps = (state) => {
  return state.createBox;
};

export default connect(mapStateToProps, actions)(CreateBox);