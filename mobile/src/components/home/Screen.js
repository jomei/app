import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Loading} from 'mobile/src/uiKit'
import BoxList from 'mobile/src/components/participants/List'
import ProfileCard from 'mobile/src/components/profile/Card'

import {startLoading} from "./ducks";

class Screen extends Component {

  componentDidMount() {
    this.props.loadData();
  }


  render() {
    if(this.props.loading) {
      return (<Loading/>)
    }

    return (
      <View>
        <ProfileCard/>
        {/*<BoxList/>*/}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state.home
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => {dispatch(startLoading())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen)