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
          value={ this.state.title }
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

  boxNameChanged = (title) => {
    this.setState({title: title})
  };

  onCreatePress = () => {
    this.props.createBox(this.state.title)
  };

  onCancelPress = () => {
    Actions.pop()
  }

}

const mapStateToProps = state => {
  return {
    contacts: state.account.contacts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createBox: (title) => { dispatch(createBox(title)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen)