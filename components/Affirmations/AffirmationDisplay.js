import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class AffirmationDisplay extends Component {
  _onPressButton(popMessage) {
    this.props.onItemClicked(this.props.popItem);
  }

  render() {
    return (
      //      <View style={styles.Layout}>
      <TouchableOpacity
        style={[styles.Layout, {backgroundColor: this.props.popItem.backColor}]}
        onPress={this._onPressButton.bind(this)}>
        <Text style={styles.AffText}>{this.props.popItem.popMessage}</Text>
      </TouchableOpacity>
      //    </View>
    );
  }
}

const styles = StyleSheet.create({
  Layout: {
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 160,
    height: 120,
    //    borderWidth: 0.3,
    borderRadius: 15, //Then Make the Border Radius twice the size of width or Height

    flexDirection: 'row',
  },
  AffText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    margin: 4,
  },
});
