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

const heroku_url = 'https://pop-mongo.herokuapp.com';

const {width: WIDTH} = Dimensions.get('window');

class LoginScreen extends Component {
  state = {
    passwordVisible: true,
    eyeButton: 'true',
    enteredEmail: '',
    enteredPassword: '',
    enteredRePassword: '',
    userArray: '',
    sameUser: '',
  };

  receiveUserDetailsFromServer = async () => {
    // await fetch('http://localhost:3000/users')
    await fetch(heroku_url + '/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({userList: responseJson});
        console.log('Response:', responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  sendReisterDetailsToServer = userDetails => {
    const body = JSON.stringify(userDetails);
    //    const results = fetch('http://localhost:3000/users', {
    //    const results = fetch('https://pop-server-123.herokuapp.com/users', {
    const results = fetch(heroku_url + '/users/add', {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify(userDetails),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => {
        console.log('res', res);
        return res;
      })
      .catch(err => {
        console.log('err', err);

        this.setState({sameUser: 'Email already registered !'});

        return err;
      });
  };

  onPressRegister2 = () => {
    let userDetails = {
      //userDetails to be saved
      username: this.state.enteredEmail,
      password: this.state.enteredPassword,
    };

    if (this.state.enteredPassword != this.state.enteredRePassword)
      //compared both the entered passwords and check if same
      this.setState({sameUser: 'Passwords do not match, Re-enter !'});
    else {
      let result = this.receiveUserDetailsFromServer();
      result.then(() => {
        console.log('user list received');

        let filtered = this.state.userList.find(List => {
          if (List.username.toLowerCase() == userDetails.username.toLowerCase())
            return 'false';
        });
        if (!filtered) {
          this.sendReisterDetailsToServer(userDetails);
          this.setState({sameUser: ''});
          this.props.navigation.navigate('Login');
        } else this.setState({sameUser: 'Username already exists !'});
      });
    }
  };

  onPressRegister = () => {
    let userDetails = {
      //userDetails to be saved
      username: this.state.enteredEmail,
      password: this.state.enteredPassword,
    };
    if (this.state.enteredPassword != this.state.enteredRePassword)
      //compared both the entered passwords and check if same
      this.setState({sameUser: 'Passwords do not match, Re-enter !'});
    else {
      let result = this.receiveUserDetailsFromServer();
      result.then(() => {
        let filtered = this.state.userArray.find(List => {
          if (List.username.toLowerCase() == userDetails.username.toLowerCase())
            return 'false';
        });
        if (!filtered) {
          this.sendReisterDetailsToServer(userDetails);
          this.setState({sameUser: ''});
          this.props.navigation.navigate('Login');
        } else this.setState({sameUser: 'Username already exists !'});
      });
    }
  };

  OnEmailTextChange = text => {
    this.setState({enteredEmail: text});
  };

  OnPasswordTextChange = text => {
    this.setState({enteredPassword: text});
  };

  OnRePasswordTextChange = text => {
    this.setState({enteredRePassword: text});
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
            onChangeText={this.OnEmailTextChange.bind(this)}
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
            onChangeText={this.OnPasswordTextChange.bind(this)}
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
            onChangeText={this.OnRePasswordTextChange.bind(this)}
            placeholder="Re-Enter Password"
            secureTextEntry={this.state.passwordVisible}
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.onPressRegister2()}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.usernameWarning}>{this.state.sameUser}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TextLogo: {
    borderColor: 'darkgrey',
    color: 'white',
    //    borderWidth: 0.8,
    paddingRight: 40,
    paddingLeft: 40,
    //    margin: 20,
    fontSize: 50,
    fontFamily: 'Zapfino',
    fontWeight: 'bold',
  },

  usernameWarning: {
    color: 'red',
  },
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
    opacity: 0.9,
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
    //    marginBottom: 20,
  },
});

export default LoginScreen;
