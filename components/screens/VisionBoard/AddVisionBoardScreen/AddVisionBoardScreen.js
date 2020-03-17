import React, {Component} from 'react';
import {
  View,
  Image,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import {BackgroundImage} from './../../../index';
import Icon from 'react-native-vector-icons/Ionicons';

class AddVisionBoardScreen extends Component {
  state = {text: ''};

  onPressCreateDreamBoard = newDreamBoardName => {
    let newVisionBoard = {
      id: this.props.visionBoardList.length + 1,
      visionBoard: newDreamBoardName,
    };

    let found = this.props.visionBoardList.find(
      item => item.visionBoard.toLowerCase() == newDreamBoardName.toLowerCase(),
    );
    console.log('found', found);
    if (found) this.alreadyExistWarning(newDreamBoardName);
    else {
      this.props.addVisionBoardList(newVisionBoard);
      this.props.navigation.navigate('VisionBoardSubScreen', {
        newVisionBoardCreated: true,
        selectedVisionBoard: newVisionBoard,
      });
    }
  };

  alreadyExistWarning = newDreamBoardName => {
    const warningHeader = 'Already Exists !';
    const warningMessage =
      'Dream Board "' + newDreamBoardName + '" already exists !';

    Alert.alert(
      warningHeader,
      warningMessage,
      [
        {
          text: 'Ok',
          onPress: () => {
            return;
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    //    console.log('photo:', this.props.visionBoardList);
    return (
      <View style={styles.container}>
        <BackgroundImage />
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
            padding={10}
          />
        </View>

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
          onPress={() => this.onPressCreateDreamBoard(this.state.text)}>
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
