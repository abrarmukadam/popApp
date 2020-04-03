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
  Dimensions,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import ImageRotate from 'react-native-image-rotate';
import CameraRoll from '@react-native-community/cameraroll';

import ActionSheet from 'react-native-actionsheet';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {VisionDisplay, BackgroundImage} from './../../../index';
const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');

class VisionBoardSubScreen extends Component {
  state = {
    photo: null,
    text: '',
    tempPhoto: null,
    newVisionBoardCreated: this.props.navigation.getParam(
      'newVisionBoardCreated',
    ),
  };

  onPressAddNew = () => {
    console.log('Add Vision Pressed');
    this.ActionSheet.show();
    // this.handleChoosePhoto();
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
  handleClickPhoto = () => {
    let photo = {};

    ImagePicker.openCamera({
      enableRotationGesture: true,
      // width: WIDTH,
      // height: HEIGHT,
      //      cropping: true,
    }).then(image => {
      image.uri = image.path;

      this.setState({photo: image, tempPhoto: image});
    });
  };
  handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: WIDTH,
      height: HEIGHT,
      cropping: true,
    }).then(image => {
      image.uri = image.path;
      this.setState({photo: image, tempPhoto: image});
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

    let newVisionArrayList = [...this.props.visionArrayList];
    newVisionArrayList.splice(visionBoard.id - 1, 1);

    this.props.deleteVisionBoard(filteredVisionBoardArray, newVisionArrayList);

    this.props.navigation.navigate('VisionBoardHome');
  };

  componentDidMount() {
    //    this.props.navigation.getParam('newVisionBoardCreated');
  }

  render() {
    let visionWidthCounter = 0;
    let filteredVisionArray = [];
    const DisplayedPhoto = {};
    const selectedVisionBoard = this.props.navigation.getParam(
      'selectedVisionBoard',
    );
    filteredVisionArray =
      this.props.visionArrayList[selectedVisionBoard.id - 1] || [];
    if (this.state.newVisionBoardCreated) {
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
              <ActionSheet
                ref={o => (this.ActionSheet = o)}
                title={'Select a Photo'}
                options={['Take Photo...', 'Choose from Library...', 'Cancel']}
                cancelButtonIndex={2}
                destructiveButtonIndex={2}
                onPress={index => {
                  if (index == 0) this.handleClickPhoto();
                  else if (index == 1) this.handleChoosePhoto();
                  // console.log(index, ' pressed');
                  /* do something */
                }}
              />
            </ScrollView>
          </SafeAreaView>

          <ActionButton
            buttonColor="#222222"
            onPress={() => this.onPressAddNew()}
          />
        </View>
      );
    if (this.state.photo) {
      if (this.state.tempPhoto.height < this.state.tempPhoto.width) {
        ImageRotate.rotateImage(
          this.state.tempPhoto.uri,
          90,
          uri => {
            DisplayedPhoto.uri = uri;
            DisplayedPhoto.height = this.state.tempPhoto.width;
            DisplayedPhoto.width = this.state.tempPhoto.heightl;
            this.setState({tempPhoto: DisplayedPhoto});
          },
          error => {
            console.error(error);
          },
        );
      }

      // const DIRECTION =
      //   this.state.photo.height > this.state.photo.width
      //     ? [{rotate: '0deg'}]
      //     : [{rotate: '90deg'}];

      /* change the deg (degree of rotation) between 0deg, 360deg*/

      return (
        <View style={styles.container}>
          <BackgroundImage />
          <Image
            source={{uri: this.state.tempPhoto.uri}}
            style={[
              {
                // transform: DIRECTION,
                // width: this.state.photo.height,
                // height: this.state.photo.width,
              },
              styles.image,
            ]}
          />

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
                  onPress={() => this.onPressAddNew()}>
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
                  onPress={() => {
                    if (this.state.photo.height < this.state.photo.width)
                      CameraRoll.saveToCameraRoll(
                        this.state.tempPhoto.uri,
                      ).then(uri => {
                        const photo = {
                          uri: uri,
                          height: this.state.photo.height,
                          width: this.state.photo.width,
                        };
                        this.setState({photo: photo});
                        this.onPressAddToDreamBoard();
                      });
                    else this.onPressAddToDreamBoard();
                  }}>
                  <Icon name="md-send" size={40} color="white"></Icon>
                </TouchableOpacity>
              </SafeAreaView>
            </View>

            {/* /////////////////////// */}
          </View>
          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            title={'Select a Photo'}
            options={['Take Photo...', 'Choose from Library...', 'Cancel']}
            cancelButtonIndex={2}
            destructiveButtonIndex={2}
            onPress={index => {
              if (index == 0) this.handleClickPhoto();
              else if (index == 1) this.handleChoosePhoto();
              // console.log(index, ' pressed');
              /* do something */
            }}
          />
        </View>
      );
    }
  }
}

export default VisionBoardSubScreen;
