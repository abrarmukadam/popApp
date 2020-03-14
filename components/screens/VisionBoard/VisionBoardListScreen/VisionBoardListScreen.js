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
  },
  {
    id: 2,
    visionBoard: 'New',
    height: 40,
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
            visionArrayList={this.props.visionArrayList}
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
