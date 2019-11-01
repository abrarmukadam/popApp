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
      'mediumturquoise',
    ],

    value: '',
    visionBoardArray: [
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
    ],

    visionArray: [
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
        backColor: 'mediumturquoise',
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
