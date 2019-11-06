import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class VisionBoardDisplay extends Component {
  onPressVisionBoard(visionItem) {
    this.props.onVisionBoardClicked(this.props.visionItem);
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.Layout, {backgroundColor: 'lightgrey'}]}
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
          <View style={{flex: 4}}></View>
          <Image
            source={{
              uri: this.props.visionItem.uri,
            }}
            style={{
              flex: 1,
              width: 320,
              height: '100%',
              //              height: 160,
              //             resizeMode: 'cover',
              position: 'absolute',

              borderRadius: 10, //Then Make the Border Radius twice the size of width or Height
            }}
          />

          <View
            style={{
              //              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              backgroundColor: 'black',
              opacity: 0.5,

              borderBottomRightRadius: 10, //Then Make the Border Radius twice the size of width or Height
              borderBottomLeftRadius: 10, //Then Make the Border Radius twice the size of width or Height
              //              flexWrap: 'wrap',
            }}>
            <Text style={styles.VisionText}>
              {this.props.visionItem.visionBoard}
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
    marginBottom: 5,
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
    //    backgroundColor: 'lightgrey',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    fontStyle: 'italic',
    margin: 4,
  },
});
