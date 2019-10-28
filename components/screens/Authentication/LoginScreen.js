import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {BackgroundImage} from './../../index';

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.safeAreaView}>
        <BackgroundImage />
        <Text style={styles.VisionText}>THIS IS LOGIN SCREEN</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    marginBottom: 20,
  },
  VisionText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '700',
    margin: 4,
    color: 'white',
    fontStyle: 'italic',
  },
});

export default LoginScreen;
