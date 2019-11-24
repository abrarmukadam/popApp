import React, {Component} from 'react';
import TabNavigator from './config/route';

import {ActivityIndicator, View, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import {thisExpression} from '@babel/types';

export default class App extends Component {
  state = {
    dataSource: '',
    isLoading: 'true',
    //  colorArray: '',
    colorArray: [
      'salmon',
      'steelblue',
      'teal',
      'skyblue',
      'lightgreen',
      'lightslategrey',
      'mediumpurple',
      'rgb(195, 125, 198)',
      'mediumturquoise',
    ],
    value: '',
  };

  updateDataServer = updateArray => {
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
  };

  updatePopArray = popArray => {
    // method to update App's state, passed to children
    this.setState({popArray: popArray});
    this.updateDataServer(popArray);
    this._storeItem('popArray', popArray);
  };

  updateVisionArray = visionArray => {
    // method to update App's state, passed to children
    this.updateDataServer(visionArray);
    this.setState({visionArray: visionArray});
    this._storeItem('visionArray', visionArray);
  };

  updateVisionBoardArray = visionBoardArray => {
    // method to update App's state, passed to children
    this.updateDataServer(visionBoardArray);
    this.setState({visionBoardArray: visionBoardArray});
    this._storeItem('visionBoardArray', visionBoardArray);
  };

  _storeItem = async (item, itemValue) => {
    try {
      await AsyncStorage.setItem(item, JSON.stringify(itemValue));
    } catch (error) {
      // Error saving data
    }
  };

  _storeData = async (popArray, visionBoardArray, visionArray) => {
    let multi_set_pairs = [
      ['popArray', JSON.stringify(popArray)],
      ['visionBoardArray', JSON.stringify(visionBoardArray)],
      ['visionArray', JSON.stringify(visionArray)],
    ];

    await AsyncStorage.multiSet(multi_set_pairs, err => {});
  };

  _retrieveData = async () => {
    //     let asyncFunction = function(resolve, reject) {
    try {
      await AsyncStorage.multiGet(
        ['popArray', 'visionBoardArray', 'visionArray'],
        (err, stores) => {
          let popArray = JSON.parse(stores[0][1]);
          let visionBoardArray = JSON.parse(stores[1][1]);
          let visionArray = JSON.parse(stores[2][1]);

          this.setState({
            popArray,
            visionBoardArray,
            visionArray,
          });

          if (popArray) {
            this.setState({isLoading: false});

            this.updateDataServer(popArray);
            this.updateDataServer(visionBoardArray);
            this.updateDataServer(visionArray);

            //       return true;
          } else {
            console.log('DATA NOT LOADED');
            //         return false;
          }
        },
      );
    } catch (error) {
      Alert.alert('Error', 'There was an error.');
      // }
    }
  };

  componentDidMount() {
    //    console.log('COMPONEND DID MOUNT CALLED ');
    /*
    AsyncStorage.multiRemove(
      ['popArray', 'visionBoardArray', 'visionArray'],
      err => {
        // keys k1 & k2 removed, if they existed
        // do most stuff after removal (if you want)
        return (
          <View>
            <Text>asdas</Text>
          </View>
        );
      },
    );
*/
    let result = this._retrieveData();

    let functionToCallWhenSuccess = () => {
      console.log('functionToCallWhenSuccess: SUCCESS ( RESOLVE )');

      if (this.state.isLoading) {
        return fetch('http://localhost:3000/login')
          .then(response => response.json())
          .then(responseJson => {
            this._storeData(
              responseJson.data.popArray,
              responseJson.data.visionBoardArray,
              responseJson.data.visionArray,
            ),
              this.setState({
                popArray: responseJson.data.popArray,
                visionBoardArray: responseJson.data.visionBoardArray,
                visionArray: responseJson.data.visionArray,
              }),
              function() {};
          })
          .catch(error => {
            console.error(error);
          });
      }
    };

    let functionToCallWhenFailed = () => {
      console.log('functionToCallWhenFailed: FAILED (REJECT)');
    };
    result.then(functionToCallWhenSuccess, functionToCallWhenFailed);
  }
  render() {
    if (this.state.isLoading || !this.state.popArray) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      // <View>
      //   <Text>Testing</Text>
      // </View>
      <TabNavigator
        screenProps={{
          ...this.state,
          updatePopArray: this.updatePopArray,
          updateVisionArray: this.updateVisionArray,
          updateVisionBoardArray: this.updateVisionBoardArray,
          updateDataServer: this.updateDataServer,
        }}
      />
    );
  }
}
