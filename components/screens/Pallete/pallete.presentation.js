import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';
/* Import the component we are drafting here */

import RegisterForm from './../../SubComponents/RegisterForm/index.js';
import BackButton from './../../Buttons/BackButton/BackButton';

class Pallete extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PALLETE</Text>
        {/* <RegisterForm
          onRegisterSuccess={() => this.props.navigation.navigate('Login')}
        />
        <BackButton
          onPressBack={() => this.props.navigation.navigate('Login')}
        /> */}
      </View>
    );
  }
}
export default Pallete;
