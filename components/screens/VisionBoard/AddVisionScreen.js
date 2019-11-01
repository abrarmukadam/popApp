import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {BackgroundImage} from './../../index';
import {
  Text,
  View,
  SafeAreaView,
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
    /*    this.props.navigation.navigate('VisionBoardSubScreen', {
      vision: newVisionBoard,
    });

  */ this.handleChoosePhoto();
  };
  onPressCreate = () => {
    let newVisionBoardArray = [...this.props.screenProps.visionBoardArray];
    const len = newVisionBoardArray.length;
    newVisionBoard = {
      id: len + 1,
      visionBoard: this.state.text,
      height: 40,
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
      <SafeAreaView style={styles.container}>
        <BackgroundImage />
        <View style={{alignContent: 'center'}}>
          {!photo && (
            <Text style={styles.text}>Give your Dreams a beautiful name</Text>
          )}
          <TextInput
            style={styles.textInputStyle}
            placeholder={'Type the Name Here...'}
            value={this.state.text}
            onChangeText={this.onTextChange.bind(this)}
            autoFocus
            textAlign="center"
            padding={10}></TextInput>
          {!photo && (
            <TouchableOpacity style={styles.button} onPress={this.onPressAdd}>
              <Text style={styles.buttonText}>Add Photo</Text>
            </TouchableOpacity>
          )}
        </View>
        {photo && (
          <View style={styles.Container2}>
            <Image source={{uri: photo.uri}} style={styles.image} />

            <View style={styles.createButtonView}>
              <TouchableOpacity
                style={styles.createButton}
                onPress={this.onPressAdd}>
                <Text style={styles.buttonText}>Edit Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.createButton}
                onPress={this.onPressCreate}>
                <Text style={styles.buttonText}>Create Dream Board</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  addButtonStyle: {justifyContent: 'flex-end', paddingLeft: 5},
  sendButtonStyle: {justifyContent: 'flex-end', paddingRight: 5},
  createButtonView: {
    //flex: 1,
    borderWidth: 2,
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    //    flexDirection: 'row',
    borderColor: 'white',
    borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },

  createButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    margin: 1,
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 20,
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
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'center',
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
    height: '100%',
    //    flexDirection: 'column',
  },
  Container2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
  },
});
