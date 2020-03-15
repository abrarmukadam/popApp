import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles.js';
import BackgroundImage from './../../../BackgroundImage';
/* Import the component we are drafting here */
import LoginForm from './../../../SubComponents/LoginForm/index.js';
import RegisterButton from '../../../Buttons/RegisterButton/RegisterButton.js';
import Logo from './../../../SubComponents/Logo/logo';

class LoginScreen extends Component {
  componentDidMount() {
    if (this.props.userLoggedIn) {
      this.props.navigation.setParams({
        tabHide: 'false',
      });

      this.props.navigation.navigate('Home');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage />
        <Logo />
        <LoginForm
          onLoginSuccess={() => {
            this.props.navigation.setParams({
              tabHide: 'false', //unhide tab bar if logged in
            });

            this.props.navigation.navigate('Home');
          }}
          onLogOutSuccess={() => {
            this.props.navigation.navigate('Login', {
              tabHide: 'true',
            }); //to Hide Tab bar in Login Page
          }}
        />
        {!this.props.userLoggedIn && (
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
