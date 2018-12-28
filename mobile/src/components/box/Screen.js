import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text} from 'react-native'
import {Actions} from 'react-native-router-flux';

import {Loading, Button} from 'mobile/src/uiKit'
import {getMyParticipant} from "mobile/src/selectors";

import {loadBox, createPosition} from "./ducks";
import PositionsList from 'PositionsList'

class Screen extends Component {

  componentDidMount() {
    this.props.loadData(this.props.boxId)
  }

  render() {
    const {loading, box, myParticipant} = this.props;

    if(loading) {
      return(<Loading/>)
    }

    return(
      <View>
        <View>
          <Text>{box.title}</Text>
          <Text>{box.total}</Text>
          <Text>{box.created_at}</Text>
        </View>
        <PositionsList/>
        <Button onPress={this.onCreatePositionPress}>
          Create Position
        </Button>
      </View>
    )
  };

  onCreatePositionPress = () => {
    const {box, myParticipant} = this.props;

    Actions.createPosition({
      createPosition: (position) => { createPosition(position, myParticipant, box ) }
    })
  }

}

const styles = {};

const mapStateToProps = (state) => {
  return {
    box: state.box,
    myParticipant: getMyParticipant(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (id) => { dispatch(loadBox(id)) }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Screen)