import React, {Component} from 'react';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import {
  SearchAffirmation,
  BackgroundImage,
  BackgroundColor,
  VisionDisplay,
  FullScreenComponent,
} from './../../index';

//const link = require('./../../GeneralComponents/images/noImage2.png');
const defaultLink = require('./../../GeneralComponents/images/noImage2.png');

const remote_link =
  'https://www.sunrgy.com/wp-content/uploads/woocommerce-placeholder-1200x1200.png';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

/* Import the component we are drafting here */
// import VisionBoardList from './../../SubComponents/VisionBoardList/index';
// import VisionBoardEmptyScreen from './../../GeneralComponents/VisionBoardEmptyScreen/VisionBoardEmptyScreen';
// import RegisterButton from './../../Buttons/RegisterButton/RegisterButton';
import VisionBoardSubScreen from '../VisionBoard/VisionBoardSubScreen/VisionBoardSubScreen';
import VisionFullScreenSwiper from './../../SubComponents/VisionFullScreenSwiper/VisionFullScreenSwiper';
let tempVisionArrayList = [
  [
    {
      id: 1,
      visionBoard: 'Amazing',
      visionMessage: 'abba',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 2,
      visionBoard: 'Amazing',
      visionMessage: 'dabba',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 3,
      visionBoard: 'Amazing',
      visionMessage: 'jabba',
      uri: 'https://picsum.photos/500',
    },
  ],
  [
    {
      id: 1,
      visionBoard: 'Nameste london',
      visionMessage: 'abba1',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 2,
      visionBoard: 'Nameste london',
      visionMessage: 'dabba2',
      uri: 'https://picsum.photos/500',
    },
    {
      id: 3,
      visionBoard: 'Nameste london',
      visionMessage: 'jabba3',
      uri: 'https://picsum.photos/500',
    },
  ],
];

class Pallete extends Component {
  state = {};

  render() {
    return (
      <VisionFullScreenSwiper
        //           onClickDelete={this.props.handleOnClickDelete}
        //           header={visionItem.visionBoard}
        itemIndex={2}
        list={tempVisionArrayList[0]}
        onClickBack={this.props.handleOnClickBack}
        visionItem={tempVisionArrayList[2]}
      />
    );
  }
}
export default Pallete;
