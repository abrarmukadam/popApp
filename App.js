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
      'slategray',
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
    console.log('UPDATED :', body);
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

    console.log('This is Ok');
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
    /*    let popArray = [
      {
        id: 1,
        popMessage: 'Awesome Awesome Awesome ! ! !',
        backColor: '#ffebcd',
      },
      {
        id: 2,
        popMessage:
          'Conscious of your choice and Responsible for your actions.. ',
        backColor: 'lightblue',
      },
    ];
    let visionBoardArray = [
      {
        id: 1,
        visionBoard: 'ME Dreams!',
        uri:
          'https://www.ocregister.com/wp-content/uploads/2017/08/0810_fea_fnt-l-ducktales-01.jpg?w=535',
      },
      {
        id: 2,
        visionBoard: 'Career',
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfKPLFlnsjsMqNastpZ_2ZNnFNq0MjKP4sx7-jdjYPKhL6Bik',
      },
    ];

    let visionArray = [
      {
        id: 1,
        visionBoard: 'ME Dreams!',
        visionMessage: '50,000$',
        backColor: '#ffebcd',
        uri:
          'https://www.ocregister.com/wp-content/uploads/2017/08/0810_fea_fnt-l-ducktales-01.jpg?w=535',
      },
      {
        id: 2,
        visionBoard: 'ME Dreams!',
        visionMessage: 'Go on a World Tour with family',
        backColor: 'lightgreen',
        uri:
          'https://www.olympicholidays.com/media/24494/gold_collection_cyclades_islands.jpg?anchor=center&mode=crop&quality=65&width=330&height=230&rnd=131491883470000000',
      },
    ];*/

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

          console.log('does popArray Exist?', popArray);
          if (popArray) {
            this.setState({isLoading: false});
            console.log('popAraay Loaded', popArray);
            this.updateDataServer(popArray);
            this.updateDataServer(visionBoardArray);
            this.updateDataServer(visionArray);

            //       return true;
          } else {
            console.log('popAraay NOT LOADED', popArray);
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
    console.log('COMPONEND DID MOUNT CALLED ');
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
      console.log('this.state.isLoading:', this.state.isLoading);

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
      console.log('ACTIVITY INDICATOR RUNNING');
      console.log(this.state.popArray);
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
      console.log('POP', this.state.popArray),
      (
        <TabNavigator
          screenProps={{
            ...this.state,
            updatePopArray: this.updatePopArray,
            updateVisionArray: this.updateVisionArray,
            updateVisionBoardArray: this.updateVisionBoardArray,
            updateDataServer: this.updateDataServer,
          }}
        />
      )
    );
  }
}
