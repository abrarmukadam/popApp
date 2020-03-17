import React, {Component} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import {BackgroundImage} from './../../../index';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

//----------------------------------------------------------
//----------TO BE CHANGED, COPPIED FOR VISION BOARD---------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
class AddVisionBoardScreen extends Component {
  state = {text: '', photo: null};

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };
  render() {
    console.log('photo:', this.state.photo);
    return (
      <View style={styles.container}>
        <BackgroundImage />
        {!this.state.photo && (
          <View style={styles.container2}>
            <Text style={styles.staticText}>
              Give your Dreams a beautiful name
            </Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder={'Type the Name Here...'}
              value={this.state.text}
              onChangeText={text => {
                this.setState({text: text});
              }}
              autoFocus
              textAlign="center"
              padding={10}></TextInput>
          </View>
        )}
        {this.state.photo && (
          <View style={styles.container3}>
            <Image
              style={styles.imageStyle}
              source={{uri: this.state.photo.uri}}
            />
            {/* <Text style={styles.staticText}>{this.state.text}</Text> */}
          </View>
        )}

        <View style={styles.backButtonStyle}>
          <Icon
            name="md-arrow-back"
            size={40}
            color="white"
            onPress={() => this.props.navigation.navigate('VisionBoardHome')}
          />
        </View>
        <TouchableOpacity
          style={styles.sendButtonStyle}
          disabled={this.state.text == false}
          onPress={() => this.handleChoosePhoto()}>
          <Icon
            name="md-send"
            size={40}
            color={this.state.text ? 'white' : 'lightgrey'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddVisionBoardScreen;
