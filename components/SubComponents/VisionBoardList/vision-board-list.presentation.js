import React, {Component} from 'react';
import styles from './styles';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import {VisionBoardDisplay} from './../../index';

class VisionBoardList extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
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
            {this.props.visionBoardList.map(vision => {
              return (
                //                <Text>{vision.visionBoard}</Text>
                <VisionBoardDisplay
                  key={vision.id}
                  id={vision.id}
                  itemId={vision.id}
                  visionItem={vision}
                  onVisionBoardClicked={this.props.navigateToVisionSubScreen}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default VisionBoardList;
