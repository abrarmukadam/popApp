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
const {width: WIDTH} = Dimensions.get('window');

class LoggedInScreen extends Component {
  state = {};

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
    this.props.navigation.navigate('Login');
  };

  render() {
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

const styles = StyleSheet.create({
  TextLogo: {
    borderColor: 'darkgrey',
    color: 'white',
    //    borderWidth: 0.8,
    paddingRight: 20,
    paddingLeft: 20,
    //    margin: 20,
    fontSize: 60,
    fontWeight: 'bold',
  },

  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
  logo: {
    marginBottom: 20,
    alignItems: 'center',
    // width: 120,
    // height: 120,
    // opacity: 0.5,
  },
});

export default LoggedInScreen;
