import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

class RegisterButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={() => this.props.onPressRegister()}>
        <Text style={styles.ButtonText}>Register</Text>
      </TouchableOpacity>
    );
  }
}

export default RegisterButton;

class Tree {
  constructor() {
    this.data = {};
    this.leftNode = null; // reference to another Tree
    this.rightNode = null; // reference to another Tree
  }
}
