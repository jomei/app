import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight, Button } from 'react-native';
import * as actions from '../../actions';
import connect from "react-redux/es/connect/connect";
import { Actions } from 'react-native-router-flux';
import {Loading} from "../common";


class BoxList extends Component {
  componentDidMount() {
    this.props.loadBoxes()
  }

  onCreatePress = () => {
    Actions.create_box()
  };

  render () {
    if(this.props.loading) {
      return( <Loading size={'large'} />)
    } else {
      return(
        <View>
          {this.renderList()}
        </View>
      )
    }
  }

  renderList = () => {
    const { boxes, error } = this.props;
    if(error) {
      return(<Text>{error}</Text>)
    }
    return (
      <View>
        <ListView
          dataSource={boxes}
          renderRow={this.renderBox} />
        <Button title="Create Box" onPress={this.onLoginPress} />
      </View>
    );
  };

  renderBox = (box) => {
    return(
      <Text>{box.title}</Text>
    )

  }
}

const mapStateToProps = (state) => {
  return {boxes: state.boxList}
};

export default connect(mapStateToProps, actions)(BoxList);