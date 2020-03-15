import React, {Component} from 'react';
import TabNavigator from './config/route';

import {ActivityIndicator, View, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import {YellowBox} from 'react-native';
import 'react-native-gesture-handler';

import axios from 'axios';
const temp_url = 'http://localhost:5000';
const heroku_url = 'https://pop-mongo.herokuapp.com';

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage has been extracted from react-native core',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.',
  '`-[RCTRootView cancelTouches]`',
]);

import {store, persistor} from './config/redux-store';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

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

  sendImageToServer = async img => {
    const createFormData = (photo, body) => {
      const data = new FormData();

      data.append('photo', {
        name: img.fileName,
        type: img.type,
        uri:
          Platform.OS === 'android' ? img.uri : img.uri.replace('file://', ''),
      });

      Object.keys(body).forEach(key => {
        data.append(key, body[key]);
      });
      return data;
    };

    //    fetch('http://localhost:5000/image/upload', {
    await fetch(heroku_url + '/image/upload', {
      method: 'POST',
      body: createFormData(img, {userId: '123'}),
    })
      .then(response => response.json())
      .then(response => {
        console.log('upload succes', response);

        //        alert('Upload success!');
        //        this.setState({photo: null});
        console.log('response:', response);
        this.setState({sendImageResponse: response});
      })
      .catch(error => {
        console.log('upload error', error);
        alert('Check Network!');
      });
  };

  updateMongoDB = async (id, data) => {
    // console.log(
    //   'update DB',
    //   id,
    //   this.state.popArray,
    //   this.state.visionBoardArray,
    //   this.state.visionArray,
    // );
    // var data = {
    //   popArray: this.state.popArray,
    //   visionBoardArray: this.state.visionBoardArray,
    //   visionArray: this.state.visionArray,
    // };
    console.log('updateMongoDB Run', data);
    await axios
      .post(heroku_url + '/users/update/' + id, data)
      .then(res => {
        //        console.log('updateMongoDB Run', res.data[0]);
        //        console.log('dadadadada', res.data[0]);
      })
      .catch(error => {
        console.log('Database Store Failed');
        console.log('error 400:', error);
      });
  };

  updateDataServer = updateArray => {
    console.log('udateDataServer Run', this.state.loggedInDetails[0]);
    //  this.updateMongoDB(this.state.loggedInDetails[0], updateArray);
  };

  updatePopArray = popArray => {
    // method to update App's state, passed to children
    var data = {
      popArray: popArray,
      visionBoardArray: this.state.visionBoardArray,
      visionArray: this.state.visionArray,
    };
    this.setState({popArray: popArray});
    this._storeItem('popArray', popArray);
    this.updateDataServer(data);
  };

  updateVisionArray = visionArray => {
    // method to update App's state, passed to children
    var data = {
      popArray: this.state.popArray,
      visionBoardArray: this.state.visionBoardArray,
      visionArray: visionArray,
    };

    this.setState({visionArray: visionArray});
    this._storeItem('visionArray', visionArray);
    this.updateDataServer(data);
  };

  updateVisionBoardArray = visionBoardArray => {
    // method to update App's state, passed to children
    var data = {
      popArray: this.state.popArray,
      visionBoardArray: visionBoardArray,
      visionArray: this.state.visionArray,
    };

    this.setState({visionBoardArray: visionBoardArray});
    this._storeItem('visionBoardArray', visionBoardArray);
    this.updateDataServer(data);
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TabNavigator
            screenProps={{
              ...this.state,
              updateloggedInDetails: this.updateloggedInDetails,
              updatePopArray: this.updatePopArray,
              updateVisionArray: this.updateVisionArray,
              updateVisionBoardArray: this.updateVisionBoardArray,
              updateDataServer: this.updateDataServer,
              updateMongoDB: this.updateMongoDB,
              sendImageToServer: this.sendImageToServer,
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
