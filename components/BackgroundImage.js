import {Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';

class BackgroundImage extends Component {
  state = {};
  render() {
    return (
      <Image
        source={require('./../background1.jpg')}
        style={styles.image}></Image>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
  },
});

export default BackgroundImage;
