import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';

import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class AddVisionScreen extends Component {
  state = {
    text: '',
    photo: null,
  };
  onTextChange = text => {
    this.setState({text});
  };

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
  onPressAdd = () => {
    this.handleChoosePhoto();
  };
  onPressCreate = () => {
    let newVisionBoardArray = [...this.props.screenProps.visionBoardArray];
    const len = newVisionBoardArray.length;
    newVisionBoard = {
      id: len + 1,
      visionBoard: this.state.text,
      uri: this.state.photo.uri,
    };
    newVisionBoardArray = [...newVisionBoardArray, newVisionBoard];

    this.props.screenProps.updateVisionBoardArray(newVisionBoardArray),
      this.props.navigation.navigate('VisionBoardSubScreen', {
        vision: newVisionBoard,
      });
  };

  render() {
    const photo = this.state.photo;

    return (
      <View style={styles.container}>
        <Image
          source={require('../../../background1.jpg')}
          style={styles.image}></Image>
        <Text style={styles.text}>Give your Dreams a beautiful name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Type the Name Here...'}
          value={this.state.text}
          onChangeText={this.onTextChange.bind(this)}
          autoFocus
          padding={10}></TextInput>
        {photo && (
          <Image
            source={{uri: photo.uri}}
            style={{width: 300, height: 300}}></Image>
        )}
        <TouchableOpacity style={styles.button} onPress={this.onPressAdd}>
          <Text style={styles.buttonText}>Add Photo</Text>
        </TouchableOpacity>

        {photo && (
          <TouchableOpacity
            style={styles.createButton}
            onPress={this.onPressCreate}>
            <Text style={styles.buttonText}>Create Dream Board</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  createButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    padding: 10,
    //    borderWidth: 1,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },
  textInputStyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    //    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    marginTop: 10,
    padding: 10,
    //    borderWidth: 1,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },
  text: {
    margin: 10,
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
  },
});
