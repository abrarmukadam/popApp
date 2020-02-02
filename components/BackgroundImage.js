import {Image, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

class BackgroundImage extends Component {
  state = {};
  render() {
    return (
      //<View style={styles.view}></View>
      <Image
        source={require('./../background1.jpg')}
        style={styles.image}></Image>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: '100%',
    backgroundColor: '#9565cd',
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
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

export default BackgroundImage;
