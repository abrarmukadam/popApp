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
import {VisionDisplay} from './../../index';
import ImagePicker from 'react-native-image-picker';
import ActionButton from 'react-native-action-button';

class VisionBoardSubScreen extends Component {
  state = {photo: null, text: '', addNew: 0};

  onPressAddNew = () => {
    this.setState({addNew: 1});
    this.props.navigation.navigate('VisionBoardSubScreen');
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
      this.setState({addNew: 0});
    }
  };

  render() {
    const photo = this.state.photo;

    const visionBoard = this.props.navigation.getParam('vision');
    let filteredVisionArray = this.props.screenProps.visionArray.filter(
      List => {
        return List.visionBoard == visionBoard.visionBoard;
      },
    );

    if (filteredVisionArray.length > 0 && this.state.addNew == 0)
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <Image
            source={require('../../../background1.jpg')}
            style={styles.image}></Image>
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
                    visionItem={vision}></VisionDisplay>
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
        <Image
          source={require('../../../background1.jpg')}
          style={styles.image}></Image>
        <View style={styles.Container}>
          <Text style={styles.Heading}>{visionBoard.visionBoard}</Text>
        </View>
        <View style={styles.Container2}>
          <Text style={styles.text}>Add a Dream to your Dream Board</Text>
          {photo && (
            <Image
              source={{uri: photo.uri}}
              style={{width: 300, height: 300}}></Image>
          )}
          <TextInput
            style={styles.textInputStyle}
            placeholder={'Type the Name Here...'}
            value={this.state.text}
            onChangeText={this.onTextChange.bind(this)}
            autoFocus
            padding={10}
          />
          {!photo && (
            <TouchableOpacity style={styles.button} onPress={this.onPressAdd}>
              <Text style={styles.buttonText}>Add Photo</Text>
            </TouchableOpacity>
          )}
          {photo && (
            <View>
              <TouchableOpacity style={styles.button} onPress={this.onPressAdd}>
                <Text style={styles.buttonText}>Change Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.createButton}
                onPress={this.onPressAddToDreamBoard}>
                <Text style={styles.buttonText}>Add to Dream Board</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
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
    // flex: 1,
    borderColor: 'white',
    borderBottomWidth: 0.5,

    //  flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Container2: {
    flex: 2,
    justifyContent: 'center',
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
  },
  text: {
    margin: 10,
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
  },
  textInputStyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default VisionBoardSubScreen;
