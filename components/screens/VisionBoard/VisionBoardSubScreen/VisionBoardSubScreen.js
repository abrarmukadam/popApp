import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {VisionDisplay, BackgroundImage} from './../../../index';

class VisionBoardSubScreen extends Component {
  state = {};
  render() {
    let visionWidthCounter = 0;
    let filteredVisionArray = [];

    const selectedVisionBoard = this.props.navigation.getParam(
      'selectedVisionBoard',
    );

    filteredVisionArray = this.props.visionArrayList.filter(List => {
      return List.visionBoard == selectedVisionBoard.visionBoard;
    });

    return (
      <View style={styles.container}>
        <BackgroundImage />
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.headerContainerStyle}>
            <Icon
              name="md-arrow-back"
              size={40}
              color="white"
              onPress={() => this.props.navigation.navigate('VisionBoardHome')}
            />
            <View style={styles.headingTextContainer}>
              <Text style={styles.Heading}>
                {selectedVisionBoard.visionBoard}
              </Text>
            </View>
            <Icon
              name="md-trash"
              size={40}
              color="white"
              onPress={() => this.onPressDeleteWarning(selectedVisionBoard)}
            />
          </View>

          <ScrollView>
            <View style={styles.VisionList}>
              {filteredVisionArray.map(vision => {
                if (visionWidthCounter % 4 == 0) visionWidthCounter = 0;
                visionWidthCounter++;

                return (
                  <VisionDisplay
                    visionWidthCounter={visionWidthCounter}
                    key={vision.id}
                    visionItem={vision}
                    //   onVisionClicked={visionItem =>
                    //     this.handleVisionClicked(visionItem)
                    //   }
                  />
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>

        <ActionButton
          buttonColor="#222222"
          //          onPress={this.onPressAddNew}
        />
      </View>
    );
  }
}

export default VisionBoardSubScreen;
