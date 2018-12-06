import React, { Component } from 'react'
import { connect } from 'react-redux';

import {Loading} from 'mobile/src/uiKit';

import {loadBox} from "./ducks";

class Screen extends Component {

  componentDidMount() {
    this.props.loadData(this.props.boxId)
  }

  render() {
    const {loading} = this.props;

    if(loading) {
      return(<Loading/>)
    }
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (id) => { dispatch(loadBox(id)) }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Screen)