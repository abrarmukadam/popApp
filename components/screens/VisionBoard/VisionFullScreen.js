import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {FullScreenSwiper} from './../../index';

class VisionFullScreen extends Component {
  state = {};

  handleOnClickDelete = index => {
    const visionItem = this.props.navigation.getParam('visionItem');

    const filteredVisionList = this.props.screenProps.visionArray.filter(
      List => {
        return List.visionBoard.indexOf(visionItem.visionBoard) !== -1;
      },
    );

    const deleteIndex = filteredVisionList[index].id;

    let tempArray = [
      ...this.props.screenProps.visionArray.filter(
        item => item.id !== deleteIndex,
      ),
    ];
    this.props.screenProps.visionArray.map(temp => {
      if (temp.id > deleteIndex) temp.id = temp.id - 1;
    });
    this.props.screenProps.updateVisionArray(tempArray);

    this.props.navigation.navigate('VisionFullScreen', {
      visionItem: filteredVisionList[index + 1],
    });
  };

  handleOnClickBack = () => {
    this.props.navigation.navigate('VisionBoardSubScreen');
  };
  render() {
    const visionItem = this.props.navigation.getParam('visionItem');
    const filteredVisionList = this.props.screenProps.visionArray.filter(
      List => {
        return List.visionBoard.indexOf(visionItem.visionBoard) !== -1;
      },
    );
    const visionIndex = filteredVisionList
      .map(List => {
        return List.visionMessage;
      })
      .indexOf(visionItem.visionMessage);

    return (
      <FullScreenSwiper
        onClickDelete={this.handleOnClickDelete}
        header={visionItem.visionBoard}
        itemIndex={visionIndex}
        list={filteredVisionList}
        onClickBack={this.handleOnClickBack}
        //        visionItem={visionItem}
      />
    );
  }
}

export default VisionFullScreen;
