import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from './../../../logo3.png';
import {BackgroundImage} from './../../index';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';

const {width: WIDTH} = Dimensions.get('window');

const heroku_url = 'https://pop-mongo.herokuapp.com';

class LoginScreen extends Component {
  state = {
    loggedInStatus: 'false',
    enteredEmail: '',
    enteredPassword: '',
    passwordVisible: true,
    eyeButton: 'true',
    validate: 'false',
    passwordWrong: 'false',
    loggedInUserId: '',
    errorMessage: '',
  };

  OnEmailTextChange = text => {
    this.setState({enteredEmail: text});
  };

  OnPasswordTextChange = text => {
    this.setState({enteredPassword: text});
  };

  onPressLogin = async () => {
    await axios
      .post(heroku_url + '/login/', {username: this.state.enteredEmail})
      .then(res => {
        console.log(res.data[0]);
        this.userValidate(res.data[0].password);
        if (this.state.validate == 'true') {
          this.saveUserDetailsOnLogin(res.data[0]);
        } else {
          this.setState({passwordWrong: 'true'});
          this.setState({errorMessage: 'Email/Password did not match'});
          console.log('Email/Password did not match');
        }
      })
      .catch(error => {
        console.log('No Network');

        this.setState({passwordWrong: 'true'});
        this.setState({
          errorMessage: 'Email/Password did not match',
        });

        console.log('error 400:', error);
      });
  };

  onPressLogOut = () => {
    this.setState({
      loggedInUserId: '',
      loggedInStatus: 'false',
      validate: 'false',
      errorMessage: '',
    });
    const loggedInDetails = ['', 'false', 'false'];
    this.props.screenProps.updateloggedInDetails(loggedInDetails);

    console.log('user logged Out');
    this.props.navigation.navigate('Login', {
      tabHide: 'true',
    });
  };

  saveUserDetailsOnLogin = async data => {
    //load data from server
    console.log('saveUserDetailsOnLogin:', data);
    this.setState({loggedInStatus: 'true', loggedInUserId: data._id});
    const loggedInDetails = [
      this.state.loggedInUserId,
      this.state.loggedInStatus,
      this.state.validate,
    ];
    this.props.screenProps.updateloggedInDetails(loggedInDetails);
    console.log('loading data from server & saving to local storage');
    console.log('pop', data.popArray);
    console.log('v array', data.visionArray);
    console.log('v board', data.visionBoardArray);

    this.props.screenProps.updatePopArray(data.popArray);
    this.props.screenProps.updateVisionBoardArray(data.visionBoardArray);
    this.props.screenProps.updateVisionArray(data.visionArray);
    this.setState({enteredEmail: '', enteredPassword: ''});

    this.props.navigation.navigate('Login', {
      tabHide: 'false',
    });
    this.props.navigation.navigate('Home');
  };

  userValidate = password => {
    if (password == this.state.enteredPassword) {
      console.log('User Authenticated');
      this.setState({validate: 'true'});
    } else {
      console.log('User Authentication Failed');
      this.setState({validate: 'false'});
    }
  };

  componentDidMount() {
    console.log('component did mount in Login called');
    if (this.props.screenProps.loggedInDetails == null) {
      const loggedInDetails = ['', 'false', 'false']; //id,loggedinStatus,validate
      this.props.screenProps.updateloggedInDetails(loggedInDetails);
      this.props.navigation.setParams({tabHide: 'true'});
    }
    this.setState({
      loggedInUserId: this.props.screenProps.loggedInDetails[0],
      loggedInStatus: this.props.screenProps.loggedInDetails[1],
      validate: this.props.screenProps.loggedInDetails[2],
    });
    if (this.props.screenProps.loggedInDetails[1] == 'true') {
      this.props.navigation.setParams({tabHide: 'false'});
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    //    if (this.props.screenProps.loggedInDetails[1] == 'false')
    if (
      this.state.loggedInStatus == 'false' &&
      this.props.screenProps.loggedInDetails[1] == 'false'
    ) {
      return (
        <View style={{flex: 1}}>
          <BackgroundImage />
          {/* Not logged in */}

          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.logo}>
              {/* <Image source={logo}></Image> */}
              <Text style={styles.TextLogo}>Ziel</Text>
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="email"
                size={28}
                color="rgba(255,255,255,0.7)"
                style={styles.inputIcon}></Icon>
              <TextInput
                style={styles.input}
                value={this.state.enteredEmail}
                onChangeText={this.OnEmailTextChange.bind(this)}
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
                value={this.state.enteredPassword}
                style={styles.input}
                onChangeText={this.OnPasswordTextChange.bind(this)}
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
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.onPressLogin()}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.textStyle}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          </SafeAreaView>

          {/* {this.state.loggedInStatus == 'true' && (
          <SafeAreaView>
            <View style={styles.logo}>
              <Image source={logo}></Image>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.onPressLogOut()}>
              <Text style={styles.loginButtonText}>LOG OUT</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )} */}
        </View>
      );
      ///    else return this.props.navigation.navigate('LoggedIn');
    } else {
      return (
        <View style={styles.container}>
          <BackgroundImage />
          <SafeAreaView>
            {
              <View style={styles.logo}>
                {/* <Image source={logo}></Image> */}
                <Text style={styles.TextLogo}>Ziel</Text>
              </View>
            }

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.onPressLogOut()}>
              <Text style={styles.loginButtonText}>LOG OUT</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  loginButtonText: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
    color: 'white',
  },
  TextLogo: {
    borderColor: 'darkgrey',
    color: 'white',
    borderWidth: 0.8,
    paddingRight: 20,
    paddingLeft: 20,
    //    margin: 20,
    fontSize: 60,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
  },
  textStyle: {
    fontSize: 15,
    color: 'blue',
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
    //  opacity: 0.5,
  },
  loginButtonText: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
    color: 'white',
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
  },
});

export default LoginScreen;
