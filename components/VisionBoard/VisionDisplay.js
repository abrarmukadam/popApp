import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const heroku_image_link = 'https://pop-mongo.herokuapp.com/image2/';

export default class VisionDisplay extends Component {
  onPressVision() {
    this.props.onVisionClicked(this.props.visionItem);
    //    this.props.navigation.navigate('VisionFullScreen');

    //    alert(this.props.popItem.popMessage);
  }

  render() {
    const widthArray = ['0', '55%', '42%', '42%', '55%'];
    //    var link = heroku_image_link + this.props.visionItem.fileName;
    //  'https://pop-mongo.herokuapp.com/image2/3ac49b78-5f8c-4d11-93d0-8bbe4f9a368e.png';
    return (
      <TouchableOpacity
        style={[
          styles.Layout,
          {
            backgroundColor: 'grey',
            height: 240,
            width: widthArray[this.props.visionWidthCounter],
          },
        ]}
        onPress={this.onPressVision.bind(this)}>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              //uri: heroku_image_link + this.props.visionItem.fileName,
              uri: this.props.visionItem.uri,
              // 'https://pop-mongo.herokuapp.com/image2/' +
              // '3ac49b78-5f8c-4d11-93d0-8bbe4f9a368e.png',
            }}
            onError={e => {
              this.props.source = {
                uri: link,
              };
            }} // source={{
            //   uri: this.props.visionItem.uri,
            // }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5, //Then Make the Border Radius twice the size of width or Height
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: '12%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            backgroundColor: 'black',
            opacity: 0.7,
            position: 'absolute',
            bottom: 0,
            borderBottomLeftRadius: 5, //Then Make the Border Radius twice the size of width or Height
            borderBottomRightRadius: 5, //Then Make the Border Radius twice the size of width or Height
          }}></View>

        <View
          style={{
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            backgroundColor: 'transparent',
            color: 'white',
            //            opacity: 0.8,
            position: 'absolute',
            bottom: 0,
            borderBottomLeftRadius: 5, //Then Make the Border Radius twice the size of width or Height
            borderBottomRightRadius: 5, //Then Make the Border Radius twice the size of width or Height
          }}>
          <Text style={styles.VisionText}>
            {this.props.visionItem.visionMessage}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Layout: {
    margin: 2,
    justifyContent: 'center',
    //    alignItems: 'flex-end',
    alignContent: 'center',
    //    width: 180,
    //    height: 240 + this.props.height,
    //    borderWidth: 0.3,
    borderRadius: 5, //Then Make the Border Radius twice the size of width or Height

    flexDirection: 'column',
  },
  VisionText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    margin: 4,
    color: 'white',
    fontStyle: 'italic',
  },
});
