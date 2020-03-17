import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class AffirmationCardDisplay extends Component {
  constructor(props) {
    super(props);
  }
  onPressCard = selectedCard => {
    this.props.onItemClicked(selectedCard);
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.Layout, {backgroundColor: this.props.popItem.backColor}]}
        onPress={() => this.onPressCard(this.props.popItem)}>
        <Text style={styles.AffText}>{this.props.popItem.popMessage}</Text>

        {/* <Text>{this.props.affirmationList[0].popMessage}</Text> */}
      </TouchableOpacity>
    );
  }
}
