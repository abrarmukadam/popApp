import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from './../../../logo3.png';
import {BackgroundImage} from './../../index';

const {width: WIDTH} = Dimensions.get('window');

class LoginScreen extends Component {
  state = {
    passwordVisible: true,
    eyeButton: 'true',
  };
  render() {
    return (
      <View style={styles.safeAreaView}>
        <BackgroundImage />
        <Icon
          style={styles.backStyle}
          name="keyboard-backspace"
          size={40}
          color="white"
          onPress={() => this.props.navigation.navigate('Login')}></Icon>
        <View style={styles.logo}>
          <Image source={logo}></Image>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name="email"
            size={28}
            color="rgba(255,255,255,0.7)"
            style={styles.inputIcon}></Icon>
          <TextInput
            style={styles.input}
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
            style={styles.input}
            placeholder="Password"
            secureTextEntry={this.state.passwordVisible}
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
            style={styles.input}
            placeholder="Re-Enter Password"
            secureTextEntry={this.state.passwordVisible}
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 20,
  },
  eyeButton: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  logo: {
    marginBottom: 20,
    alignItems: 'center',
    // width: 120,
    // height: 120,
    opacity: 0.5,
  },
  loginButtonText: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
  },
  loginButton: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#432577',
    borderWidth: 0.2,
    margin: 8,
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 0.2,
    color: 'white',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default LoginScreen;
