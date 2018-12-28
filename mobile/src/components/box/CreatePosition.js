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
          onChangeText={ this.onTitleChange }
          placeholder='title'
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

  onTitleChange = (title) => {
    this.setState({...this.state, title: title})
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