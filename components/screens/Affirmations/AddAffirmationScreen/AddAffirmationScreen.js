import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles.js';
import {SearchAffirmation, BackgroundImage} from './../../../index';
import ActionButton from 'react-native-action-button';

/* Import the component we are drafting here */
//import AddAffirmationCard from './../../SubComponents/AddAffirmationCard/index';
import AddAffirmationCard from './../../../SubComponents/AddAffirmationCard/index';
import Icon from 'react-native-vector-icons/Ionicons';

class AddAffirmationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddAffirmationCard
          returnToHome={() => {
            this.props.navigation.navigate('Home');
          }}
        />
        <View style={styles.backButtonStyle}>
          <Icon
            name="md-close"
            size={40}
            color="white"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}></Icon>
        </View>
      </View>
    );
  }
}
export default AddAffirmationScreen;
