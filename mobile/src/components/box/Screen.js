import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text} from 'react-native'

import {Loading, Button} from 'mobile/src/uiKit'

import {loadBox} from "./ducks";
import PositionsList from 'PositionsList'

class Screen extends Component {

  componentDidMount() {
    this.props.loadData(this.props.boxId)
  }

  render() {
    const {loading, box} = this.props;

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
        <Button>
          Create Position
        </Button>
      </View>
    )
  }
}

const styles = {};

const mapStateToProps = (state) => {
  return state.box
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (id) => { dispatch(loadBox(id)) }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Screen)