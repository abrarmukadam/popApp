import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class AffirmationDisplay extends Component {
  _onPressButton(popMessage) {
    this.props.onItemClicked(this.props.popItem);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.Layout, {backgroundColor: this.props.popItem.backColor}]}
        onPress={this._onPressButton.bind(this)}>
        <Text style={styles.AffText}>{this.props.popItem.popMessage}</Text>

        {/* <Text>{this.props.affirmationList[0].popMessage}</Text> */}
      </TouchableOpacity>
    );
  }
}
