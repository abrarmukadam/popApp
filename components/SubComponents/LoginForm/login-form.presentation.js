import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles.js';
import {SocialMediaLinks} from '../../index';
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      enteredEmail: '',
      enteredPassword: '',
      eyeButton: 'false',
      passwordVisible: true,
      errorMessage: '',
    };
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.fetchLogin.status.isLoading &&
      this.props.fetchLogin.status.isLoaded
    ) {
      // a success login was detected
      if (this.props.onLoginSuccess) {
        this.setState({
          errorMessage: '',
        });
        this.props.onLoginSuccess();
      }
    }
    if (
      !prevProps.fetchLogin.status.isFailed &&
      this.props.fetchLogin.status.isFailed
    ) {
      this.setState({
        errorMessage: 'Login Failed, Please check username/passowrd.',
      });
      console.log('LOGIN FAILED');
    }
  }

  render() {
    if (!this.props.userLoggedIn)
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon
              name="email"
              size={28}
              color="rgba(255,255,255,0.7)"
              style={styles.inputIcon}></Icon>
            <TextInput
              disabled={this.props.fetchLogin.status.isLoading ? true : false}
              style={styles.input}
              value={this.state.enteredEmail}
              onChangeText={text => this.setState({enteredEmail: text})}
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              underlineColorAndroid="transparent"></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name="lock"
              size={28}
              color="rgba(255,255,255,0.7)"
              style={styles.inputIcon}></Icon>
            <TextInput
              disabled={this.props.fetchLogin.status.isLoading ? true : false}
              value={this.state.enteredPassword}
              style={styles.input}
              onChangeText={text => this.setState({enteredPassword: text})}
              placeholder="Password"
              secureTextEntry={this.state.passwordVisible}
              placeholderTextColor="rgba(255,255,255,0.7)"
              underlineColorAndroid="transparent"></TextInput>
            <TouchableOpacity style={styles.eyeButton}>
              <Icon
                onPress={() => {
                  if (this.state.eyeButton == 'true') {
                    this.setState({
                      eyeButton: 'false',
                      passwordVisible: false,
                    });
                  } else
                    this.setState({
                      eyeButton: 'true',
                      passwordVisible: true,
                    });
                }}
                name={this.state.passwordVisible == true ? 'eye' : 'eye-off'}
                size={28}
                color="rgba(255,255,255,0.7)"></Icon>
            </TouchableOpacity>
          </View>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>

          <TouchableOpacity
            style={styles.loginButton}
            disabled={this.props.fetchLogin.status.isLoading ? true : false}
            onPress={() =>
              this.props.onLogin(
                this.state.enteredEmail,
                this.state.enteredPassword,
              )
            }>
            {this.props.fetchLogin.status.isLoading && (
              <Text style={styles.loginButtonText}>Loading...</Text>
            )}
            {!this.props.fetchLogin.status.isLoading && (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      );
    else
      return (
        <View style={styles.LogoutScreenContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              console.log('Logout Button Pressed');
              this.props.onLogout();
              this.setState({enteredPassword: '', enteredEmail: ''});
              this.props.onLogOutSuccess();
            }}>
            <Text style={styles.loginButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

export default LoginForm;
