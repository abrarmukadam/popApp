import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles.js';
import {SearchAffirmation, BackgroundImage} from './../../index';
import ActionButton from 'react-native-action-button';

/* Import the component we are drafting here */
import {EditAffirmationScreen} from './../../../components/index';
import Icon from 'react-native-vector-icons/Ionicons';

class Pallete extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PALLETE</Text>
        {/* <EditAffirmationScreen></EditAffirmationScreen> */}
      </View>
    );
  }
}
export default Pallete;
