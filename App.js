import React, {Component} from 'react';
import TabNavigator from './config/route';

import {ActivityIndicator, View, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import {YellowBox} from 'react-native';
import 'react-native-gesture-handler';

import axios from 'axios';
const heroku_url = 'https://pop-mongo.herokuapp.com';

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage has been extracted from react-native core',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.',
  '`-[RCTRootView cancelTouches]`',
]);

export default class App extends Component {
  state = {
    dataSource: '',
    isLoading: 'true',
    //  colorArray: '',
    colorArray: [
      '#e1bee7',
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
    loggedInDetails: '',
  };

  updateMongoDB = async id => {
    // console.log(
    //   'update DB',
    //   id,
    //   this.state.popArray,
    //   this.state.visionBoardArray,
    //   this.state.visionArray,
    // );
    const data = {
      popArray: this.state.popArray,
      visionBoardArray: this.state.visionBoardArray,
      visionArray: this.state.visionArray,
    };

    await axios
      .post(heroku_url + '/users/update/' + id, data)
      .then(res => {
        //        console.log(res.data[0]);
      })
      .catch(error => {
        console.log('Database Store Failed');
        console.log('error 400:', error);
      });
  };

  updateDataServer = updateArray => {
    this.updateMongoDB(this.state.loggedInDetails[0]);
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

  updateloggedInDetails = loggedInDetails => {
    this.setState({loggedInDetails: loggedInDetails});
    this._storeItem('loggedInDetails', loggedInDetails);
  };

  _storeItem = async (item, itemValue) => {
    try {
      await AsyncStorage.setItem(item, JSON.stringify(itemValue));
    } catch (error) {
      // Error saving data
    }
  };

  _storeData = async (
    popArray,
    visionBoardArray,
    visionArray,
    loggedInDetails,
  ) => {
    let multi_set_pairs = [
      ['popArray', JSON.stringify(popArray)],
      ['visionBoardArray', JSON.stringify(visionBoardArray)],
      ['visionArray', JSON.stringify(visionArray)],
      ['loggedInDetails', JSON.stringify(loggedInDetails)],
    ];

    await AsyncStorage.multiSet(multi_set_pairs, err => {});
  };

  _retrieveData = async () => {
    //     let asyncFunction = function(resolve, reject) {
    try {
      await AsyncStorage.multiGet(
        ['popArray', 'visionBoardArray', 'visionArray', 'loggedInDetails'],
        (err, stores) => {
          let popArray = JSON.parse(stores[0][1]);
          let visionBoardArray = JSON.parse(stores[1][1]);
          let visionArray = JSON.parse(stores[2][1]);
          let loggedInDetails = JSON.parse(stores[3][1]);

          //          console.log('retrived loggedInDetails', loggedInDetails);

          this.setState({
            popArray,
            visionBoardArray,
            visionArray,
            loggedInDetails,
          });

          if (popArray) {
            this.setState({isLoading: false});

            this.updateDataServer(popArray);
            this.updateDataServer(visionBoardArray);
            this.updateDataServer(visionArray);

            //       return true;
          } else {
            console.log('DATA NOT LOADED');
            this.setState({loggedInDetails: ['', 'false', 'false']});

            this.updateloggedInDetails(['', 'false', 'false']);
            this.setState({isLoading: false});

            //         return false;
          }
        },
      );
    } catch (error) {
      Alert.alert('Error', 'There was an error.');
      // }
    }
  };

  UNSAFE_componentWillMount() {
    //    console.log('COMPONEND DID MOUNT CALLED ');

    // AsyncStorage.multiRemove(
    //   ['popArray', 'visionBoardArray', 'visionArray'],
    //   err => {
    //     // keys k1 & k2 removed, if they existed
    //     // do most stuff after removal (if you want)
    //     return (
    //       <View>
    //         <Text>asdas</Text>
    //       </View>
    //     );
    //   },
    // );

    let result = this._retrieveData();

    let functionToCallWhenSuccess = () => {
      console.log('functionToCallWhenSuccess: SUCCESS ( RESOLVE )');

      // if (this.state.isLoading) {
      //   //                               return fetch('http://localhost:3000/login')
      //   return fetch('https://pop-mongo.herokuapp.com//login')
      //     .then(response => response.json())
      //     .then(responseJson => {
      //       this._storeData(
      //         responseJson.data.popArray,
      //         responseJson.data.visionBoardArray,
      //         responseJson.data.visionArray,
      //         responseJson.data.loggedInDetails,
      //       ),
      //         this.setState({
      //           popArray: responseJson.data.popArray,
      //           visionBoardArray: responseJson.data.visionBoardArray,
      //           visionArray: responseJson.data.visionArray,
      //           loggedInDetails: responseJson.data.loggedInDetails,
      //         }),
      //         function() {};
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      // }
    };

    let functionToCallWhenFailed = () => {
      console.log('functionToCallWhenFailed: FAILED (REJECT)');
    };
    result.then(functionToCallWhenSuccess, functionToCallWhenFailed);
  }
  render() {
    if (this.state.isLoading) {
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
          updateloggedInDetails: this.updateloggedInDetails,
          updatePopArray: this.updatePopArray,
          updateVisionArray: this.updateVisionArray,
          updateVisionBoardArray: this.updateVisionBoardArray,
          updateDataServer: this.updateDataServer,
          updateMongoDB: this.updateMongoDB,
        }}
      />
    );
  }
}
