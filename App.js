import React, {Component} from 'react';
import RootStack from './config/route';

export default class App extends Component {
  state = {
    value: '',
    popArray: [
      {
        id: 1,
        popMessage: 'Awesome Awesome Awesome ! ! !',
        backColor: '#ffebcd',
      },
      {
        id: 2,
        popMessage: 'Let it flow and let it Go ! ',
        backColor: 'lightblue',
      },
      {
        id: 3,
        popMessage: 'Upset the Establised Order... ',
        backColor: 'lightgreen',
      },
      {
        id: 4,
        popMessage:
          'Madness is like Gravity...All it needs is a little Push.. ',
        backColor: 'rgb(195, 125, 198)',
      },
      {
        id: 5,
        popMessage: 'I am an Agent of Chaos... ',
        backColor: 'purple',
      },
      {
        id: 6,
        popMessage: 'Five Little Monkeys jumping on the bed.. ',
        backColor: 'pink',
      },
    ],
  }; // state in App now instead of Home

  updatePopArray = popArray => {
    // method to update App's state, passed to children
    this.setState({popArray: popArray});
  };
  render() {
    return (
      <RootStack
        screenProps={{...this.state, updatePopArray: this.updatePopArray}}
      />
    );
  }
}
