import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
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
