import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text} from 'react-native'
import {Actions} from 'react-native-router-flux';

import {Loading, Button} from 'mobile/src/uiKit'

import {loadBox, createPosition, selectPosition} from "./ducks";
import PositionsList from './PositionsList'

class Screen extends Component {

  render() {
    const {loading, box, positions, myParticipant, selectPosition} = this.props;

    if(loading) {
      this.props.loadData(this.props.boxId);
      return(<Loading/>)
    }

    return(
      <View>
        <View>
          <Text>{box.title}</Text>
          <Text>{box.total}</Text>
          <Text>{box.created_at}</Text>
        </View>

        <PositionsList positions={positions} participant={myParticipant} onItemPress={(position) => {selectPosition(position, myParticipant )} }/>

        <Button onPress={this.onCreatePositionPress} >
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
  };
}

const styles = {};

const mapStateToProps = (state) => {
  return state.box
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (id) => { dispatch(loadBox(id)) },
    selectPosition: (position) => { dispatch(selectPosition(position)) }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Screen)