import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImage from './../../BackgroundImage';
import Logo from './../../SubComponents/Logo/logo';
class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      passwordVisible: true,
      eyeButton: 'true',
      enteredEmail: '',
      enteredPassword: '',
      enteredRePassword: '',
      errorMessage: '',
    };
  }

  onPressRegister = () => {
    if (
      //verify 1: email id entered ?
      !this.state.enteredEmail ||
      !this.state.enteredPassword ||
      !this.state.enteredRePassword
    ) {
      this.setState({
        errorMessage: 'Enter all the above fields',
      });
      return;
    }
    //verify 2: entered password same ?
    else if (this.state.enteredPassword != this.state.enteredRePassword) {
      this.setState({
        errorMessage: 'Re-entered password does not match',
      });
      return;
    }
    //verify 3: send request to server & verify- Register if all Ok
    this.setState({
      errorMessage: '',
    });

    this.props.onRegister(this.state.enteredEmail, this.state.enteredPassword);
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.registerStatus.status.isLoading &&
      this.props.registerStatus.status.isLoaded
    ) {
      this.setState({errorMessage: this.props.RegisterFailedError});

      // a success login was detected
      if (this.props.onRegisterSuccess) {
        this.props.onRegisterSuccess();
      }
    }
    if (
      !prevProps.registerStatus.status.isFailed &&
      this.props.registerStatus.status.isFailed
    ) {
      this.setState({errorMessage: this.props.RegisterFailedError});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage />
        <Logo />
        <View style={styles.inputContainer}>
          <Icon
            name="email"
            size={28}
            color="rgba(255,255,255,0.7)"
            style={styles.inputIcon}></Icon>
          <TextInput
            onChangeText={text => this.setState({enteredEmail: text})}
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
        <View style={styles.inputContainer}>
          <Icon
            name="lock"
            size={28}
            color="rgba(255,255,255,0.7)"
            style={styles.inputIcon}></Icon>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({enteredRePassword: text})}
            placeholder="Re-Enter Password"
            secureTextEntry={this.state.passwordVisible}
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <Text style={styles.errorMessageStyle}>{this.state.errorMessage}</Text>
        <TouchableOpacity
          style={styles.ButtonStyle}
          disabled={this.props.registerStatus.status.isLoading ? true : false}
          onPress={() => this.onPressRegister()}>
          {this.props.registerStatus.status.isLoading && (
            <Text style={styles.ButtonText}>Loading</Text>
          )}
          {!this.props.registerStatus.status.isLoading && (
            <Text style={styles.ButtonText}>Register</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterForm;
