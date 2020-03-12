import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles.js';
import BackgroundImage from './../../../BackgroundImage';
/* Import the component we are drafting here */
import LoginForm from './../../../SubComponents/LoginForm/index.js';
import RegisterButton from '../../../Buttons/RegisterButton/RegisterButton.js';
import Logo from './../../../SubComponents/Logo/logo';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage />
        <Logo />
        <LoginForm
          onLoginSuccess={() => this.props.navigation.navigate('Home')}
        />
        {!this.props.loggedInStatus && (
          <RegisterButton
            onPressRegister={() => {
              this.props.navigation.navigate('Register');
            }}
          />
        )}
      </View>
    );
  }
}

export default LoginScreen;
