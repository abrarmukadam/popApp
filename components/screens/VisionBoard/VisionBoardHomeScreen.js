import React, {Component} from 'react';
import {VisionBoardDisplay} from './../../index';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';

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
          <Image
            source={require('../../../background1.jpg')}
            style={styles.image}></Image>
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
            onPress={this.onPressAdd}></ActionButton>

          {
            //  <Text>Vision Board!</Text>
            //  <Button title="Add Item" onPress={this.onPressAdd}></Button>
          }
        </SafeAreaView>
      );
    return (
      //IF NO VISION BOARD CREATED
      <SafeAreaView style={styles.safeAreaView}>
        <Image
          source={require('../../../background1.jpg')}
          style={styles.image}></Image>
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
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
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
