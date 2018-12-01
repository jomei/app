import React, { Component } from 'react'
import {View} from 'react-native'
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'

import {Input, Button, Loading} from "mobile/src/uiKit";

import {createBox} from "./ducks";

class Screen extends Component {

  constructor(props) {
    super(props);

    this.state = {loading: false};
  }

  render() {

    return(
      <View>
        <Input
          onChangeText={ this.boxNameChanged }
          placeholder='box name'
          value={ this.state.name }
        />

        <Button onPress={this.onCancelPress}>
          Cancel
        </Button>

        <Button onPress={this.onCreatePress}>
          Create Box
        </Button>
      </View>
    )
  }

  boxNameChanged = (name) => {
    this.setState({name: name})
  };

  onCreatePress = () => {
    this.props.createBox(this.state.name)
  };

  onCancelPress = () => {
    Actions.back()
  }

}

const mapStateToProps = state => {
  return {
    contacts: state.account.contacts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createBox: (name) => { dispatch(createBox(name)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen)