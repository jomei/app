import React, {Component} from 'react'
import {View} from 'react-native'

import {Input, Button} from "mobile/src/uiKit";

class CreateBox extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <View>
        <Input
          onChangeText={ emailChanged }
          placeholder='box name'
          value={ email }
        />
      </View>
    )
  }
}