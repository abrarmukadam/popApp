import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import {VisionDisplay, BackgroundImage} from './../../index';
import ImagePicker from 'react-native-image-picker';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class VisionBoardSubScreen extends Component {
  state = {photo: null, text: '', addNew: 0};

  onPressAddNew = () => {
    this.handleChoosePhoto();
    // this.setState({ addNew: 1 }); //added inside handleChoosePhoto
    //   this.props.navigation.navigate('VisionBoardSubScreen');
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
    };
    this.props.screenProps.updateVisionArray([
      ...this.props.screenProps.visionArray,
      newVision,
    ]);
    {
      this.setState({addNew: 0, text: ''});
    }
  };

  handleVisionClicked = visionItem => {
    console.log(visionItem);
    this.props.navigation.navigate('VisionFullScreen', {
      visionItem: visionItem,
    });
  };

  render() {
    const photo = this.state.photo;

    const visionBoard = this.props.navigation.getParam('vision');
    let filteredVisionArray = this.props.screenProps.visionArray.filter(
      List => {
        return List.visionBoard == visionBoard.visionBoard;
      },
    );
    console.log(filteredVisionArray.length);

    if (filteredVisionArray.length > 0 && this.state.addNew == 0)
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <BackgroundImage></BackgroundImage>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              borderColor: 'white',
              borderBottomWidth: 1,
              paddingLeft: 5,
              marginBottom: 2,
            }}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Button
                title="Back"
                onPress={() =>
                  this.props.navigation.navigate('VisionBoardHome')
                }></Button>
            </View>

            <View style={{flex: 2, alignItems: 'flex-start'}}>
              <Text style={styles.Heading}>{visionBoard.visionBoard}</Text>
            </View>
          </View>

          <ScrollView>
            <View style={styles.VisionList}>
              {filteredVisionArray.map(vision => {
                return (
                  <VisionDisplay
                    key={vision.id}
                    visionItem={vision}
                    onVisionClicked={visionItem =>
                      this.handleVisionClicked(visionItem)
                    }></VisionDisplay>
                );
              })}
            </View>
          </ScrollView>

          <ActionButton
            buttonColor="blue"
            onPress={this.onPressAddNew}></ActionButton>
        </SafeAreaView>
      );
    return (
      //to add New Image
      <SafeAreaView style={styles.safeAreaView}>
        <BackgroundImage />
        <View style={styles.Container}>
          <Text style={styles.Heading}>{visionBoard.visionBoard}</Text>
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
                  value={this.state.text}
                  onChangeText={this.onTextChange.bind(this)}
                  autoCapitalize="none"
                  padding={10}
                />
              </View>

              <TouchableOpacity
                style={styles.sendButtonStyle}
                onPress={this.onPressAddToDreamBoard}>
                <Icon name="content-save" size={40} color="white"></Icon>
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

    flex: 1,
    //    justifyContent: 'flex-start',
  },
  Container: {
    paddingBottom: 4,
    borderColor: 'white',
    borderBottomWidth: 0.5,
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
    borderWidth: 2,
    paddingBottom: 4,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderColor: 'white',
    borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    borderRadius: 20,
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
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 20,
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
