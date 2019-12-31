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
      let popArray = [
        {
          id: 1,
          popMessage: 'Awesome Awesome Awesome ! ! !',
          backColor: 'salmon',
        },
        {
          id: 2,
          popMessage:
            'Conscious of your choice and Responsible for your actions.. ',
          backColor: 'steelblue',
        },
        {
          id: 3,
          popMessage: 'Upset the Establised Order... ',
          backColor: 'teal',
        },
        {
          id: 4,
          popMessage: 'First Realization of a Warrior is not knowing... ',
          backColor: 'skyblue',
        },
        {
          id: 5,
          popMessage: 'Meditate your actions... ',
          backColor: 'lightgreen',
        },
        {
          id: 6,
          popMessage:
            'Actions must be Conscious, Spontaneous, Intentional and Complete.. ',
          backColor: 'lightslategrey',
        },
        {
          id: 7,
          popMessage: 'Let it flow and let it glow ! ',
          backColor: 'mediumpurple',
        },
      ];

      let colorArray = [
        '#ffebcd',
        'lightblue',
        'silver',
        'skyblue',
        'lightgreen',
        'yellow',
        'pink',
        'rgb(195, 125, 198)',
        'mediumturquoise',
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
        {
          id: 3,
          visionBoard: 'ME Dreams!',
          visionMessage: 'Go off the grid for a month',
          backColor: 'lightblue',
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FSaJw61-l3kcNSaE8rnzd4U8kvuvFf0sN9Y5jugn22Nq5kyU&s',
        },
        {
          id: 4,
          visionBoard: 'ME Dreams!',
          visionMessage: 'bungie jumping toh karna hi hai',
          backColor: '#ffebcd',
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfOT8Mwi4Fjdgves74vrI058DSNODE-JpvzL6NQQIrXzOOGAHtA&s',
        },
        {
          id: 5,
          visionBoard: 'ME Dreams!',
          visionMessage: 'Have a charity NGO under my care',
          backColor: 'yellow',
          uri:
            'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          id: 6,
          visionBoard: 'ME Dreams!',
          visionMessage: 'bungie jumping toh karna hi hai',
          backColor: '#ffebcd',
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL9YQM-viMIRdeaKNkcEj4HPFO3TjTg8O07OdyGnD36rrdU-3',
        },
        {
          id: 7,
          visionBoard: 'Career',
          visionMessage: 'Go off the grid for a month',
          backColor: 'lightblue',
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulyyemSoPHNoWWBx3VHB4dhPRha3gxHVYVErA8kgfRZrDJ2hJHw',
        },
        {
          id: 8,
          visionBoard: 'Career',
          visionMessage: 'Go on a Worl Tour with family',
          backColor: 'lightgreen',
          uri:
            'https://www.scified.com/articles/what-are-random-number-generators-used-for-61.jpg',
        },
      ];
      if (this.state.isLoading) {
        this._storeData(popArray, visionBoardArray, visionArray);
        this.setState({
          popArray: popArray,
          visionBoardArray: visionBoardArray,
          visionArray: visionArray,
        });

        /*        return fetch('http://localhost:3000/login')
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
        */
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
