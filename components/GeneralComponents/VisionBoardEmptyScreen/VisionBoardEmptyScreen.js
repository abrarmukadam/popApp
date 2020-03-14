import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';
class VisionBoardEmptyScreen extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.Heading}>Dream Board</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This is where you can add photos to all the things you want and
            would like to experience...
          </Text>
          <Text style={styles.text}>Quite a Dreamy Place !!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default VisionBoardEmptyScreen;
