import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {BackgroundImage} from './../../index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import FormData from 'form-data';

const heroku_url = 'https://pop-mongo.herokuapp.com';

const img = {
  height: 2002,
  origURL:
    'assets-library://asset/asset.JPG?id=ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED&ext=JPG',
  longitude: -19.5112,
  type: 'image/jpeg',
  uri:
    'file:///Users/abrar/Library/Developer/CoreSimulator/Devices/FFE7CE3C-CFF4-4D28-9472-7D9226E82FAD/data/Containers/Data/Application/EFE1BF16-6767-4B0C-9ED6-C4D9BAC3E81F/tmp/52042791-7E3D-4007-A334-DA89F857E3B9.jpg',
  fileName: 'IMG_0005.JPG',
  isVertical: false,
};

class ForgotPasswordScreen extends Component {
  state = {};

  handleDownloadPhoto = async () => {
    const data = {
      fileName: '914eca79-85c4-450b-bb7b-75fcb023e469.png',
    };
    const path = './' + 'code.js'; //Path.resolve(__dirname, 'code.jpg');
    await axios
      .post('http://localhost:5000/image/download', {
        // .post(heroku_url + '/image/download', {
        //fileName: 'b9820179-b02a-45dd-bc4a-f13919a0fb60.png',
        fileName: '914eca79-85c4-450b-bb7b-75fcb023e469.png',
      })
      .then(res => {
        console.log('download status', res);
        alert('download success!');
      })
      .catch(error => {
        console.log('download error', error);
        alert('download failed!');
      });

    // fetch('http://localhost:5000/api/download', {
    //   method: 'POST',
    //   body: {fileName: '914eca79-85c4-450b-bb7b-75fcb023e469.png'},
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log('download status', response);
    //     alert('download success!');
    //     this.setState({photo: null});
    //   })
    //   .catch(error => {
    //     console.log('download error', error);
    //     alert('download failed!');
    //   });
  };

  handleUploadPhoto = () => {
    const createFormData = (photo, body) => {
      const data = new FormData();

      data.append('photo', {
        name: img.fileName,
        type: img.type,
        uri:
          Platform.OS === 'android' ? img.uri : img.uri.replace('file://', ''),
      });

      Object.keys(body).forEach(key => {
        data.append(key, body[key]);
      });
      return data;
    };

    fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: createFormData(this.state.photo, {userId: '123'}),
    })
      .then(response => response.json())
      .then(response => {
        console.log('upload succes', response);
        alert('Upload success!');
        this.setState({photo: null});
      })
      .catch(error => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <BackgroundImage />
        <Icon
          style={styles.backStyle}
          name="keyboard-backspace"
          size={40}
          color="white"
          onPress={() => this.props.navigation.navigate('Login')}></Icon>

        <Text style={{fontSize: 30}}>FORGOT PASSWORD</Text>
        {/* <Icon
          //          style={styles.backStyle}
          name="square"
          size={40}
          color="red"
          onPress={() => this.handleUploadPhoto()}></Icon> */}
        {/* <Icon
          //          style={styles.backStyle}
          name="square"
          size={40}
          color="green"
          onPress={() => this.handleDownloadPhoto()}></Icon> */}

        {/* <Image
          uri="http://localhost:5000/image/download/914eca79-85c4-450b-bb7b-75fcb023e469.png"
          style={styles.image}></Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backStyle: {
    marginLeft: 18,
    position: 'absolute',
    top: 37,
    left: 8,
  },
  image: {
    flex: 2,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'column',
  },
});
export default ForgotPasswordScreen;
