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
    const { list, error, dataSource } = this.props;
    if(error) {
      return(<Text>{error}</Text>)
    }

    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderBox} />
        <Button title="Create Box" onPress={this.onCreatePress} />
      </View>
    );
  };

  renderBox = (listItem) => {
    return(
      <TouchableHighlight onPress={() => this.onBoxItemPress(listItem)}>
        <View>
          <Text>{listItem.box.title} - {listItem.box.total} RUB</Text>
        </View>
      </TouchableHighlight>
    )
  }

  onBoxItemPress = (boxData, BoxID) => {

  }

  onLongBoxItemPress = (boxData, BoxID) => {
    console.log("long click")
    console.log(boxData)
    console.log(BoxID)
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});


const mapStateToProps = (state) => {
  return {list: state.boxList.list, dataSource: dataSource.cloneWithRows(state.boxList.list)}
};

export default connect(mapStateToProps, actions)(BoxList);