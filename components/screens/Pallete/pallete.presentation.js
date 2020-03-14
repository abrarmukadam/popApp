import React, {Component} from 'react';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import {
  SearchAffirmation,
  BackgroundImage,
  BackgroundColor,
  VisionDisplay,
} from './../../index';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

/* Import the component we are drafting here */
// import VisionBoardList from './../../SubComponents/VisionBoardList/index';
// import VisionBoardEmptyScreen from './../../GeneralComponents/VisionBoardEmptyScreen/VisionBoardEmptyScreen';
// import RegisterButton from './../../Buttons/RegisterButton/RegisterButton';
import VisionBoardSubScreen from '../VisionBoard/VisionBoardSubScreen/VisionBoardSubScreen';

class Pallete extends Component {
  state = {test: false, photo: null};

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        this.setState({photo: response});
        console.log(response);
      }
    });
  };
  render() {
    //    if (TestVisionBoardList)
    let vision = {
      id: '1',
      visionBoard: 'ABC',
      visionMessage: 'vision Message',
      uri:
        'content://com.popapp.provider/root/storage/emulated/0/Pictures/image-180edb7a-70cd-4269-a1b3-78b4610dbac3.jpg',
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.handleChoosePhoto();
          }}>
          <Text> IMAGE </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('button pressed', this.state.test);
            this.setState({test: !this.state.test});
          }}>
          <Text> PRESS BUTTON </Text>
        </TouchableOpacity>
        {this.state.test && (
          <VisionDisplay
            visionWidthCounter={1}
            visionItem={vision}
            //   onVisionClicked={visionItem =>
            //     this.handleVisionClicked(visionItem)
            //   }
          />
        )}
      </View>
    );
  }
}
export default Pallete;
