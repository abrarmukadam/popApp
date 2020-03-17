import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles.js';
/* Import the component we are drafting here */

import RegisterForm from './../../../SubComponents/RegisterForm/index.js';
import BackButton from './../../../Buttons/BackButton/BackButton';

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RegisterForm
          onRegisterSuccess={() => this.props.navigation.navigate('Login')}
        />
        <BackButton
          onPressBack={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
export default RegisterScreen;
