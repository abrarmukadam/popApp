import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {FullScreenSwiper} from './../../index';

class VisionFullScreen extends Component {
  state = {};

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
    console.log(filteredVisionList);
    const visionIndex = filteredVisionList
      .map(List => {
        return List.visionMessage;
      })
      .indexOf(visionItem.visionMessage);

    return (
      <FullScreenSwiper
        itemIndex={visionIndex}
        list={filteredVisionList}
        onClickBack={this.handleOnClickBack}
      />
    );
  }
}

export default VisionFullScreen;
