import React, {Component} from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

class Logo extends Component {
  state = {};
  render() {
    return (
      <View style={styles.logo}>
        {/* <Image source={logo}></Image> */}
        <Text style={styles.TextLogo}>Ziel</Text>
      </View>
    );
  }
}

export default Logo;
