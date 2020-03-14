import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {VisionDisplay, BackgroundImage} from './../../index';
import ImagePicker from 'react-native-image-picker';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class VisionBoardSubScreen extends Component {
  state = {photo: this.props.navigation.getParam('photo'), text: '', addNew: 0};

  onPressAddNew = () => {
    this.handleChoosePhoto();
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
        this.setState({addNew: 1});
        console.log('response', response);
      }
    });
  };
  onPressAdd = () => {
    this.handleChoosePhoto();
  };

  onPressAddToDreamBoard = () => {
    let len = this.props.screenProps.visionArray.length;
    let newVision = {
      id: len + 1,
      visionBoard: this.props.navigation.getParam('vision').visionBoard,
      visionMessage: this.state.text,
      uri: this.state.photo.uri,
      fileName: '',
    };
    // let temp = this.props.screenProps
    //   .sendImageToServer(this.state.photo)
    //   .then((res, err) => {
    //     console.log('res', res);
    //     // console.log(
    //     //   'filename:',
    //     //   this.props.screenProps.sendImageResponse.files.filename,
    //     // );
    //     newVision.fileName = this.props.screenProps.sendImageResponse.files.filename;
    //     let newVisionArray = [...this.props.screenProps.visionArray];
    //     newVisionArray[
    //       len + 1
    //     ].fileName = this.props.screenProps.sendImageResponse.files.filename;
    //     console.log('newVisionArray', newVisionArray);
    //     this.props.screenProps.updateVisionArray([newVisionArray]);
    //   })
    //   .catch(() => {
    //     console.log('error uploading image');
    //   });
    // console.log('pehle ye chala');
    this.props.screenProps.updateVisionArray([
      ...this.props.screenProps.visionArray,
      newVision,
    ]);

    this.setState({addNew: 0, text: ''});
  };

  handleVisionClicked = visionItem => {
    this.props.navigation.navigate('VisionFullScreen', {
      visionItem: visionItem,
    });
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
    let filteredVisionBoardArray = this.props.screenProps.visionBoardArray.filter(
      List => {
        return List.visionBoard != visionBoard.visionBoard;
      },
    );
    let index = 1;
    filteredVisionBoardArray.map(temp => {
      temp.id = index;
      index++;
    });

    let filteredVisionArray = this.props.screenProps.visionArray.filter(
      List => {
        return List.visionBoard != visionBoard.visionBoard;
      },
    );
    index = 1;
    filteredVisionArray.map(temp => {
      temp.id = index;
      index++;
    });
    this.props.screenProps.updateVisionBoardArray(filteredVisionBoardArray);
    this.props.screenProps.updateVisionArray(filteredVisionArray);

    this.props.navigation.navigate('VisionBoardHome');
  };

  render() {
    let visionWidthCounter = 0;
    let filteredVisionArray = [];
    const photo = this.state.photo;

    const visionBoard = this.props.navigation.getParam('vision');

    if (this.props.screenProps.visionArray)
      filteredVisionArray = this.props.screenProps.visionArray.filter(List => {
        return List.visionBoard == visionBoard.visionBoard;
      });

    if (filteredVisionArray.length > 0 && this.state.addNew == 0)
      return (
        <View style={{flex: 1}}>
          <BackgroundImage></BackgroundImage>

          <SafeAreaView style={styles.safeAreaView}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                borderColor: 'white',
                borderBottomWidth: 1,
                paddingLeft: 5,
                marginBottom: 2,
              }}>
              <View style={{flex: 1, alignItems: 'flex-start', marginLeft: 5}}>
                <Icon
                  name="keyboard-backspace"
                  size={40}
                  color="white"
                  onPress={() =>
                    this.props.navigation.navigate('VisionBoardHome')
                  }></Icon>
              </View>

              <View style={{flex: 5, alignItems: 'center'}}>
                <Text style={styles.Heading}>{visionBoard.visionBoard}</Text>
              </View>

              <View style={{marginRight: 5}}>
                <Icon
                  name="delete"
                  size={40}
                  color="white"
                  onPress={() => this.onPressDeleteWarning(visionBoard)}></Icon>
              </View>
            </View>

            <ScrollView>
              <View style={styles.VisionList}>
                {filteredVisionArray.map(vision => {
                  if (visionWidthCounter % 4 == 0) visionWidthCounter = 0;
                  visionWidthCounter++;

                  return (
                    <VisionDisplay
                      visionWidthCounter={visionWidthCounter}
                      //                    width={width}
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

            <ActionButton
              buttonColor="#222222"
              onPress={this.onPressAddNew}></ActionButton>
          </SafeAreaView>
        </View>
      );
    return (
      //to add New Image
      <SafeAreaView style={styles.safeAreaView}>
        <BackgroundImage />
        <View style={styles.Container}>
          <View style={{marginLeft: 5}}>
            <Icon
              name="close"
              size={40}
              color="white"
              onPress={() => {
                this.setState({photo: 'null', addNew: 0, text: ''});
                this.props.navigation.navigate('VisionBoardSubScreen');
              }}></Icon>
          </View>
          <View style={{flex: 5, alignItems: 'center'}}>
            <Text style={styles.Heading}>{visionBoard.visionBoard}</Text>
          </View>
        </View>
        {!filteredVisionArray.length && //this is Only exicuted during the 1st time when No Dream board was available.
          !photo &&
          this.setState({photo: visionBoard})}

        {photo && ( //if Existing Items in the Vision Board & if New Image Selected
          <View style={styles.Container2}>
            <Image source={{uri: photo.uri}} style={styles.image}></Image>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={this.onPressAdd}>
                <Icon name="plus-box" size={40} color="white"></Icon>
              </TouchableOpacity>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder={'Type the Caption Here...'}
                  //    placeholderTextColor="slategray"
                  value={this.state.text}
                  autoFocus
                  onChangeText={this.onTextChange.bind(this)}
                  autoCapitalize="none"
                  padding={10}
                />
              </View>

              <TouchableOpacity
                style={styles.sendButtonStyle}
                onPress={this.onPressAddToDreamBoard}>
                <Icon name="checkbox-marked" size={40} color="white"></Icon>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    borderColor: 'white',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    flex: 1,
    //    justifyContent: 'flex-start',
  },
  Container: {
    paddingBottom: 4,
    borderColor: 'white',
    flexDirection: 'row',
    //    borderBottomWidth: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Container2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
  },
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
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  addButtonStyle: {justifyContent: 'flex-end', paddingLeft: 5},
  sendButtonStyle: {justifyContent: 'flex-end', paddingRight: 5},
  buttonContainer: {
    //    flex: 1,
    //    borderWidth: 2,
    paddingBottom: 4,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    //  borderColor: 'white',
    //   borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    opacity: 0.8,

    // borderRadius: 20,
  },

  button: {
    marginTop: 10,
    padding: 10,
    //    borderWidth: 1,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },

  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },

  VisionList: {
    margin: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    margin: 10,
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
  },
  textInputStyle: {
    fontSize: 20,
    backgroundColor: 'grey',
    color: '#fffafa',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 10,
    marginRight: 2,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
});

export default VisionBoardSubScreen;
