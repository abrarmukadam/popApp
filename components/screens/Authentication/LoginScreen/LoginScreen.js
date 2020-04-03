import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles.js';
import {BackgroundImage, SocialMediaLinks} from '../../../index';
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
    // if (this.props.fetchLogin.status.isLoading) {
    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: 'center',
    //         padding: 20,
    //       }}>
    //       <BackgroundImage />
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     </View>
    //   );
    // }

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
        <SocialMediaLinks />
      </View>
    );
  }
}

export default LoginScreen;
