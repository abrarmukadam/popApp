import React, {Component} from 'react';
import TabNavigator from './config/route';

export default class App extends Component {
  state = {
    colorArray: [
      '#ffebcd',
      'lightblue',
      'silver',
      'skyblue',
      'lightgreen',
      'yellow',
      'pink',
      'rgb(195, 125, 198)',
      'hotpink',
    ],

    value: '',
    visionBoardArray: [
      {
        id: 1,
        visionBoard: 'Personal',
        uri:
          'https://blog.portalpravaler.com.br/wp-content/uploads/2016/05/marketing-pessoal.jpg',
      },
      {
        id: 2,
        visionBoard: 'Professional',
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfKPLFlnsjsMqNastpZ_2ZNnFNq0MjKP4sx7-jdjYPKhL6Bik',
      },
    ],

    visionArray: [
      {
        id: 1,
        visionBoard: 'Personal',
        visionMessage: '50,000$',
        backColor: '#ffebcd',
        uri: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
        height: 100,
      },
      {
        id: 2,
        visionBoard: 'Personal',
        visionMessage: 'Go on a World Tour with family',
        backColor: 'lightgreen',
        uri:
          'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        height: 150,
      },
      {
        id: 3,
        visionBoard: 'Personal',
        visionMessage: 'Go off the grid for a month',
        backColor: 'lightblue',
        uri:
          'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        height: 100,
      },
      {
        id: 4,
        visionBoard: 'Personal',
        visionMessage: 'bungie jumping toh karna hi hai',
        backColor: '#ffebcd',
        uri: 'https://hackernoon.com/hn-images/1*jFyawcsqoYctkTuZg6wQ1A.jpeg',
      },
      {
        id: 5,
        visionBoard: 'Personal',
        visionMessage: 'Have a charity NGO under my care',
        backColor: 'yellow',
        uri:
          'https://climatecommunication.yale.edu/wp-content/uploads/2017/04/001-stone-circle-jpeg-768x350.jpg',
        height: 150,
      },
      {
        id: 6,
        visionBoard: 'Professional',
        visionMessage: 'bungie jumping toh karna hi hai',
        backColor: '#ffebcd',
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL9YQM-viMIRdeaKNkcEj4HPFO3TjTg8O07OdyGnD36rrdU-3',
        height: 100,
      },
      {
        id: 7,
        visionBoard: 'Professional',
        visionMessage: 'Go off the grid for a month',
        backColor: 'lightblue',
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulyyemSoPHNoWWBx3VHB4dhPRha3gxHVYVErA8kgfRZrDJ2hJHw',
        height: 100,
      },
      {
        id: 8,
        visionBoard: 'Professional',
        visionMessage: 'Go on a Worl Tour with family',
        backColor: 'lightgreen',
        uri:
          'https://www.scified.com/articles/what-are-random-number-generators-used-for-61.jpg',
        height: 100,
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
        backColor: 'hotpink',
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

  updateVisionBoardArray = visionBoardArray => {
    // method to update App's state, passed to children
    this.setState({visionBoardArray: visionBoardArray});
  };

  render() {
    return (
      <TabNavigator
        screenProps={{
          ...this.state,
          updatePopArray: this.updatePopArray,
          updateVisionArray: this.updateVisionArray,
          updateVisionBoardArray: this.updateVisionBoardArray,
        }}
      />
    );
  }
}
