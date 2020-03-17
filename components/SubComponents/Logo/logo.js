import React, {Component} from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

class Logo extends Component {
  state = {};

  // componentDidMount() {
  //   Font.loadAsync({
  //     ZapfinoLinotypeOne: require('./../../../android/app/src/main/assets/fonts/ZapfinoLinotypeOne.ttf'),
  //   });
  // }
  render() {
    return (
      <View style={styles.logo}>
        {/* <Image source={logo}></Image> */}
        <Text style={styles.TextLogo}>Ziel</Text>
        {/* <Icon name="comments" size={30} color="#900" /> */}
      </View>
    );
  }
}

export default Logo;
