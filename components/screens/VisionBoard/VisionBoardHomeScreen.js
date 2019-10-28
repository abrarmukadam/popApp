import React, {Component} from 'react';
import {VisionBoardDisplay, BackgroundImage} from './../../index';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Button,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class VisionBoardHomeScreen extends Component {
  navigateToVisionSubScreen = vision => {
    this.props.navigation.navigate('VisionBoardSubScreen', {
      vision: vision,
    });
  };
  onPressCreate = () => {
    this.props.navigation.navigate('AddVisionBoardScreen');
  };
  onPressAdd = () => {
    this.props.navigation.navigate('AddVisionBoardScreen');
  };

  render() {
    let filteredList = [...this.props.screenProps.visionBoardArray];

    if (filteredList[0])
      //IF VISION BOARD ALREADY EXISTS
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <BackgroundImage />
          <View
            style={{
              borderColor: 'white',
              borderBottomWidth: 0.5,
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={styles.Heading}>Dream Boards</Text>
          </View>
          <ScrollView>
            <View style={styles.VisionList}>
              {filteredList.map(vision => {
                return (
                  <VisionBoardDisplay
                    key={vision.id}
                    id={vision.id}
                    itemId={vision.id}
                    visionItem={vision}
                    onVisionBoardClicked={this.navigateToVisionSubScreen}>
                    >
                  </VisionBoardDisplay>
                );
              })}
            </View>
          </ScrollView>
          <ActionButton
            buttonColor="blue"
            onPress={this.onPressAdd}
            /*            size={40}
            icon={
              <Icon
                name={'home'}
                size={70}
                color="green"
                onPress={this.onPressAdd}></Icon>
            }*/
          ></ActionButton>
        </SafeAreaView>
      );
    return (
      //IF NO VISION BOARD CREATED
      <SafeAreaView style={styles.safeAreaView}>
        <BackgroundImage />
        <Text style={styles.Heading}>Dream Board</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            This is where you can add photos to all the things you want and
            would like to experience...
          </Text>
          <Text style={styles.text}>Quite a Dreamy Place !!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onPressCreate}>
          <Text style={styles.buttonText}>Create your Dream Board</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    marginTop: 10,
    padding: 10,
    //    borderWidth: 1,
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    marginBottom: 20,
  },
  Heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  VisionList: {
    margin: 1,
    //    flexDirection: 'row',
    //  flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default VisionBoardHomeScreen;
