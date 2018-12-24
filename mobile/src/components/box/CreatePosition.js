import React, { Component } from 'react'
import {View} from 'react-native'
import {Actions} from 'react-native-router-flux';

import {Button, Input} from "mobile/src/uiKit";

class CreatePosition extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <View>
        <Input
          onChangeText={ this.onNameChange }
          placeholder='name'
          value={ this.state.name }
        />
        <Input
          onChangeText={ this.onAmountChange }
          placeholder='amount'
          value={ this.state.amount }
        />

        <Button onPress={this.onCreatePress}>
          Create Position
        </Button>
      </View>
    )
  };

  onNameChange = (name) => {
    this.setState({...this.state, name: name})
  };

  onAmountChange = (amount) => {
    this.setState({...this.state, amount: amount})
  };

  onCreatePress = () => {
    this.props.createPosition(this.state);
    Actions.pop()
  }
}

export default CreatePosition