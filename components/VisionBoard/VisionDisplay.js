import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class VisionDisplay extends Component {
  onPressVision() {
    this.props.onVisionClicked(this.props.visionItem);
    //    this.props.navigation.navigate('VisionFullScreen');

    //    alert(this.props.popItem.popMessage);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.Layout, {backgroundColor: 'darkcyan'}]}
        onPress={this.onPressVision.bind(this)}>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: this.props.visionItem.uri,
            }}
            style={{
              width: 180,
              height: 193,
              borderRadius: 5, //Then Make the Border Radius twice the size of width or Height
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
          }}>
          <Text style={styles.VisionText}>
            {this.props.visionItem.id}. {this.props.visionItem.visionMessage}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Layout: {
    margin: 2,
    justifyContent: 'center',
    //    alignItems: 'flex-end',
    alignContent: 'center',
    width: 180,
    height: 240,
    //    borderWidth: 0.3,
    borderRadius: 5, //Then Make the Border Radius twice the size of width or Height

    flexDirection: 'column',
  },
  VisionText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    margin: 4,
    color: 'white',
    fontStyle: 'italic',
  },
});
