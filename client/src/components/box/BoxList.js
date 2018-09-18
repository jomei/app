import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight, Button } from 'react-native';
import * as actions from '../../actions';
import connect from "react-redux/es/connect/connect";
import { Actions } from 'react-native-router-flux';
import {Loading} from "../common";


class BoxList extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.boxes),
    };
  }
  componentDidMount() {
    console.log("start loading")
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
    console.log(boxes)
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBox} />
        <Button title="Create Box" onPress={this.onCreatePress} />
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
  return {boxes: state.boxList.list}
};

export default connect(mapStateToProps, actions)(BoxList);