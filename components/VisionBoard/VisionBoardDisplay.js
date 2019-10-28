import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class VisionBoardDisplay extends Component {
  onPressVisionBoard(visionItem) {
    //this.props.navigation.navigate('Detail', {popMessage: popMessage});
    this.props.onVisionBoardClicked(this.props.visionItem);
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.Layout, {backgroundColor: 'darkcyan'}]}
        onPress={this.onPressVisionBoard.bind(this)}>
        <View
          style={{
            flex: 4,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: this.props.visionItem.uri,
            }}
            style={{
              flex: 1,
              width: 320,
              height: 160,
              resizeMode: 'cover',
              position: 'absolute',

              borderRadius: 10, //Then Make the Border Radius twice the size of width or Height
            }}
          />

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              //          alignSelf: 'flex-start',
              //alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.VisionText}>
              {this.props.id}. {this.props.visionItem.visionBoard}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Layout: {
    margin: 2,
    //    padding: 5,
    justifyContent: 'center',
    //    alignItems: 'flex-end',
    alignContent: 'center',
    width: 320,
    height: 200,
    //    borderWidth: 0.3,
    borderRadius: 10, //Then Make the Border Radius twice the size of width or Height

    flexDirection: 'column',
  },
  VisionText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    fontStyle: 'italic',
    margin: 4,
  },
});
