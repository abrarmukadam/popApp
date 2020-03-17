import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class BackButton extends Component {
  render() {
    return (
      <Icon
        style={styles.backStyle}
        name="keyboard-backspace"
        size={40}
        color="white"
        onPress={() => this.props.onPressBack()}
      />
    );
  }
}

export default BackButton;
