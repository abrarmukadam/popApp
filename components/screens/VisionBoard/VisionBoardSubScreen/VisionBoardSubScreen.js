import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {VisionDisplay, BackgroundImage} from './../../../index';

class VisionBoardSubScreen extends Component {
  state = {
    photo: null,
    text: '',
    newVisionBoardCreated: this.props.navigation.getParam(
      'newVisionBoardCreated',
    ),
  };

  onPressAddNew = () => {
    console.log('Add Vision Pressed');
    this.handleChoosePhoto();
  };

  handleVisionClicked = visionItem => {
    let visionIndex = [];
    visionIndex = this.props.visionBoardList.findIndex(
      item => item.visionBoard == visionItem.visionBoard,
    );

    this.props.navigation.navigate('VisionFullScreen', {
      visionItem: visionItem,
      visionArrayList: this.props.visionArrayList[visionIndex],
      visionBoardIndex: visionIndex,
    });
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
      customButtons: [],
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  onPressAddToDreamBoard = () => {
    let tempVisionArrayList = [...this.props.visionArrayList];
    const selectedVisionBoard = this.props.navigation.getParam(
      'selectedVisionBoard',
    );

    const newVision = {
      //       id: tempVisionArrayList[selectedVisionBoard.id - 1].length + 1,
      visionBoard: selectedVisionBoard.visionBoard,
      visionMessage: this.state.text,
      uri: this.state.photo.uri,
    };
    if (tempVisionArrayList[selectedVisionBoard.id - 1]) {
      newVision.id = tempVisionArrayList[selectedVisionBoard.id - 1].length + 1;
      tempVisionArrayList[selectedVisionBoard.id - 1] = [
        ...tempVisionArrayList[selectedVisionBoard.id - 1],
        newVision,
      ];
    } else {
      newVision.id = 1;
      tempVisionArrayList[selectedVisionBoard.id - 1] = [newVision];
    }
    console.log('NEW LIST>', tempVisionArrayList);
    this.setState({photo: null});
    this.props.addVision(tempVisionArrayList);
    this.props.navigation.navigate('VisionBoardSubScreen');
  };

  onPressDeleteWarning = visionBoard => {
    const deletHeader = 'Delete "' + visionBoard.visionBoard + '" ?';
    const deletMessage =
      'This will Delete all Vision Entries on your "' +
      visionBoard.visionBoard +
      '" Dream Board.\n\n Do you wish to Continue ?';
    Alert.alert(
      deletHeader,
      deletMessage,
      [
        {
          text: 'Cancel',
          onPress: () => {
            return;
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            this.onPressDelete(visionBoard);
          },
        },
      ],
      {cancelable: false},
    );
  };

  onPressDelete = visionBoard => {
    let filteredVisionBoardArray = this.props.visionBoardList.filter(List => {
      return List.visionBoard != visionBoard.visionBoard;
    });
    let index = 1;
    filteredVisionBoardArray.map(temp => {
      temp.id = index;
      index++;
    });

    console.log('filteredVisionBoardArray', filteredVisionBoardArray);

    let newVisionArrayList = [...this.props.visionArrayList];
    newVisionArrayList.splice(visionBoard.id - 1, 1);

    console.log('newVisionArrayList', newVisionArrayList);
    this.props.deleteVisionBoard(filteredVisionBoardArray, newVisionArrayList);

    this.props.navigation.navigate('VisionBoardHome');
  };

  componentDidMount() {
    //    this.props.navigation.getParam('newVisionBoardCreated');
  }

  render() {
    let visionWidthCounter = 0;
    let filteredVisionArray = [];

    const selectedVisionBoard = this.props.navigation.getParam(
      'selectedVisionBoard',
    );
    filteredVisionArray =
      this.props.visionArrayList[selectedVisionBoard.id - 1] || [];
    if (this.state.newVisionBoardCreated) {
      console.log('if(newVisionBoardCreated) TRUE');
      this.onPressAddNew();
      this.setState({newVisionBoardCreated: false});
    }

    if (!this.state.photo)
      return (
        <View style={styles.container}>
          <BackgroundImage />
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.headerContainerStyle}>
              <Icon
                name="md-arrow-back"
                size={40}
                color="white"
                onPress={() =>
                  this.props.navigation.navigate('VisionBoardHome')
                }
              />
              <View style={styles.headingTextContainer}>
                <Text style={styles.Heading}>
                  {selectedVisionBoard.visionBoard}
                </Text>
              </View>
              <Icon
                name="md-trash"
                size={40}
                color="white"
                onPress={() => this.onPressDeleteWarning(selectedVisionBoard)}
              />
            </View>

            <ScrollView>
              <View style={styles.VisionList}>
                {filteredVisionArray.map(vision => {
                  if (visionWidthCounter % 4 == 0) visionWidthCounter = 0;
                  visionWidthCounter++;

                  return (
                    <VisionDisplay
                      visionWidthCounter={visionWidthCounter}
                      key={vision.id}
                      visionItem={vision}
                      onVisionClicked={visionItem =>
                        this.handleVisionClicked(visionItem)
                      }
                    />
                  );
                })}
              </View>
            </ScrollView>
          </SafeAreaView>

          <ActionButton
            buttonColor="#222222"
            onPress={() => this.onPressAddNew()}
          />
        </View>
      );
    if (this.state.photo)
      return (
        <View style={styles.container}>
          <BackgroundImage />
          <Image
            source={{uri: this.state.photo.uri}}
            style={styles.image}></Image>

          <View style={styles.safeAreaView}>
            <SafeAreaView style={styles.headerContainerStyle2}>
              <Icon
                name="md-close"
                size={40}
                color="white"
                onPress={() => {
                  this.setState({photo: null});
                  this.props.navigation.navigate('VisionBoardSubScreen');
                }}
              />
              <View style={styles.headingTextContainer}>
                <Text style={styles.Heading}>
                  {selectedVisionBoard.visionBoard}
                </Text>
              </View>
            </SafeAreaView>
            {/* /////////////////////// */}
            <View style={styles.Container2}>
              <SafeAreaView style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.addButtonStyle}
                  onPress={() => this.handleChoosePhoto()}>
                  <Icon name="md-images" size={40} color="white"></Icon>
                </TouchableOpacity>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder={'Type the Caption Here...'}
                    //    placeholderTextColor="slategray"
                    // value={this.state.text}
                    autoFocus
                    onChangeText={text => {
                      this.setState({text});
                    }}
                    autoCapitalize="none"
                    padding={10}
                  />
                </View>

                <TouchableOpacity
                  style={styles.sendButtonStyle}
                  //onPress={() => console.log(this.state.text)}
                  onPress={() => this.onPressAddToDreamBoard()}>
                  <Icon name="md-send" size={40} color="white"></Icon>
                </TouchableOpacity>
              </SafeAreaView>
            </View>

            {/* /////////////////////// */}
          </View>
        </View>
      );
  }
}

export default VisionBoardSubScreen;
