import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles.js';
import {BackgroundImage} from './../../../index';
import ActionButton from 'react-native-action-button';

/* Import the component we are drafting here */
import VisionBoardList from './../../../SubComponents/VisionBoardList/index';
import VisionBoardEmptyScreen from './../../../GeneralComponents/VisionBoardEmptyScreen/VisionBoardEmptyScreen';

const TestVisionBoardList = [
  {
    id: 1,
    visionBoard: 'Deam',
    height: 40,
    uri:
      'file://Users/abrar/Library/Developer/CoreSimulator/Devices/FFE7CE3C-CFF4-4D28-9472-7D9226E82FAD/data/Containers/Data/Application/0F61BE60-D776-40A5-BD4D-875FB158C355/tmp/FDF4E03A-2B20-461B-8710-840013149BC8.jpg',
  },
  {
    id: 2,
    visionBoard: 'New',
    height: 40,
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ1BzEaBaH--xssLNjYJX_0tHKqbC5C22tqTy13-otaXcY5o2a',
  },
];

class VisionBoardListScreen extends Component {
  constructor(props) {
    super(props);
  }
  onPressAdd = () => {
    console.log('ADD PRESSED');
    this.props.navigation.navigate('AddVisionBoardScreen');
  };

  navigateToVisionSubScreen = selectedVisionBoard => {
    console.log('navigating to VisionSubScreen');
    this.props.navigation.navigate('VisionBoardSubScreen', {
      selectedVisionBoard: selectedVisionBoard,
      newVisionBoardCreated: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('VISION BOARD LIST DID UPDATE CALLED');

    // if (
    //   prevProps.loggedInVisionBoardList != this.props.loggedInVisionBoardList
    // ) {
    //   console.log('FETCH UPDATED V BOARD ON NEW LOGIN');
    //   this.props.fetchVisionBoards(
    //     this.props.loggedInVisionBoardList,
    //     this.props.loggedInVisionArrayList,
    //   );
    // }
  }

  render() {
    //    if (TestVisionBoardList)
    return (
      <View style={styles.container}>
        <BackgroundImage />
        {!this.props.visionBoardList[0] && <VisionBoardEmptyScreen />}
        {this.props.visionBoardList[0] && (
          <VisionBoardList
            visionBoardList={this.props.visionBoardList}
            navigateToVisionSubScreen={this.navigateToVisionSubScreen}
          />
        )}
        <ActionButton buttonColor="#222222" onPress={() => this.onPressAdd()} />
      </View>
    );
  }
}
export default VisionBoardListScreen;
