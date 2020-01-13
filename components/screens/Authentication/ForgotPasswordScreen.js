import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {BackgroundImage} from './../../index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ForgotPasswordScreen extends Component {
  state = {};
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
});
export default ForgotPasswordScreen;
