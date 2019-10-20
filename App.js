import React, {Component} from 'react';
import RootStack from './config/route';

export default class App extends Component {
  state = {
    colorArray: [
      '#ffebcd',
      'lightblue',
      'blue',
      'skyblue',
      'lightgreen',
      'yellow',
      'pink',
      'rgb(195, 125, 198)',
      'purple',
    ],

    value: '',

    visionArray: [
      {
        id: 1,
        visionMessage: '50,000$',
        backColor: '#ffebcd',
      },
      {
        id: 2,
        visionMessage: 'Go on a Worl Tour with family',
        backColor: 'ligtgreen',
      },
      {
        id: 3,
        visionMessage: 'Go off the grid for a month',
        backColor: 'lightblue',
      },
      {
        id: 4,
        visionMessage: 'bungie jumping toh karna hi hai',
        backColor: 'cayn',
      },
      {
        id: 5,
        visionMessage: 'Have a charity NGO under my care',
        backColor: 'yellow',
      },
    ],

    popArray: [
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
      {
        id: 3,
        popMessage: 'Upset the Establised Order... ',
        backColor: 'lightgreen',
      },
      {
        id: 4,
        popMessage: 'First Realization of a Warrior is not knowing... ',
        backColor: 'rgb(195, 125, 198)',
      },
      {
        id: 5,
        popMessage: 'Meditate your actions... ',
        backColor: 'purple',
      },
      {
        id: 6,
        popMessage:
          'Actions must be Conscious, Spontaneous, Intentional and Complete.. ',
        backColor: 'pink',
      },
      {
        id: 7,
        popMessage: 'Let it flow and let it Go ! ',
        backColor: 'lightgreen',
      },
    ],
  }; // state in App now instead of Home

  updatePopArray = popArray => {
    // method to update App's state, passed to children
    this.setState({popArray: popArray});
  };

  updateVisionArray = visionArray => {
    // method to update App's state, passed to children
    this.setState({visionArray: visionArray});
  };

  render() {
    return (
      <RootStack
        screenProps={{
          ...this.state,
          updatePopArray: this.updatePopArray,
          updateVisionArray: this.updateVisionArray,
        }}
      />
    );
  }
}
