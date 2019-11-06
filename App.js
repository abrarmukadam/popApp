import React, {Component} from 'react';
import TabNavigator from './config/route';

import {ActivityIndicator, View} from 'react-native';

export default class App extends Component {
  state = {
    dataSource: '',
    isLoading: 'true',
    colorArray: '',

    value: '',
    popArray: '',
  };

  updateData = updateArray => {
    const body = JSON.stringify(updateArray);
    const results = fetch('http://localhost:3000/login', {
      method: 'PUT',
      mode: 'CORS',
      body: JSON.stringify(updateArray),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
    console.log('UPDATED:', body);
  };

  updatePopArray = popArray => {
    // method to update App's state, passed to children
    this.updateData(popArray);

    this.setState({popArray: popArray});
  };

  updateVisionArray = visionArray => {
    // method to update App's state, passed to children
    this.updateData(visionArray);
    this.setState({visionArray: visionArray});
  };

  updateVisionBoardArray = visionBoardArray => {
    // method to update App's state, passed to children
    this.updateData(visionBoardArray);
    this.setState({visionBoardArray: visionBoardArray});
  };

  componentDidMount() {
    return fetch('http://localhost:3000/login')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            popArray: responseJson.data.popArray,
            colorArray: responseJson.data.colorArray,
            visionBoardArray: responseJson.data.visionBoardArray,
            visionArray: responseJson.data.visionArray,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    console.log('data from server', this.state.dataSource);
    return (
      <TabNavigator
        screenProps={{
          ...this.state,
          updatePopArray: this.updatePopArray,
          updateVisionArray: this.updateVisionArray,
          updateVisionBoardArray: this.updateVisionBoardArray,
          updateData: this.updateData,
        }}
      />
    );
  }
}
