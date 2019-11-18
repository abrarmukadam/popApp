import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {
  FullScreenSwiper,
  ScreenSwiper2,
  FullScreenComponent,
} from './../../index';

class VisionFullScreen extends Component {
  // state = {visionIndex: 0};

  handleOnClickDelete = index => {
    const visionItem = this.props.navigation.getParam('visionItem');
    console.log(visionItem);
    //filtering out the vision Boards

    const filteredVisionList = this.props.screenProps.visionArray.filter(
      List => {
        return List.visionBoard.indexOf(visionItem.visionBoard) !== -1;
      },
    );

    //locating the item to be deleted
    const deleteIndex = filteredVisionList[index].id;

    //deleting the item from vision Board
    let tempArray = [
      ...this.props.screenProps.visionArray.filter(
        item => item.id !== deleteIndex,
      ),
    ];

    //re-arranging the visionArray after deleting
    // const updatedVisionArray = [...this.props.screenProps.visionArray];
    tempArray.map(temp => {
      if (temp.id > deleteIndex) temp.id = temp.id - 1;
    });
    this.props.screenProps.updateVisionArray(tempArray);

    let newIndex = filteredVisionList.length - index - 1;
    let newItem = newIndex ? filteredVisionList[index] : filteredVisionList[0];
    // let newItem = filteredVisionList[index]; // : filteredVisionList[0];
    this.props.navigation.navigate('VisionBoardSubScreen');
    this.props.navigation.navigate('VisionFullScreen', {
      visionItem: newItem,
    });
  };

  handleOnClickBack = () => {
    this.props.navigation.navigate('VisionBoardSubScreen');
  };

  render() {
    return (
      <FullScreenComponent
        visionItem={this.props.navigation.getParam('visionItem')}
        visionArray={this.props.screenProps.visionArray}
        handleOnClickBack={this.handleOnClickBack}
        handleOnClickDelete={this.handleOnClickDelete}
      />
    );
  }
}

export default VisionFullScreen;
