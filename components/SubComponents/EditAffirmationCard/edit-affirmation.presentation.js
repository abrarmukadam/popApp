import React, {Component} from 'react';
import styles from './styles';
import {View, TextInput, Text} from 'react-native';

class EditAffirmationCard extends Component {
  state = {affirmationMessage: this.props.affirmation.popMessage};
  render() {
    return (
      <View
        style={[styles.container, {backgroundColor: this.props.onColorChange}]}>
        <TextInput
          style={styles.AffTextStyle}
          multiline
          value={this.state.affirmationMessage}
          placeholder={'TypeHere'}
          numberOfLines={4}
          padding={10}
          onChangeText={text => {
            this.setState({affirmationMessage: text});
            this.props.onChangeAffirmation(text);
          }}
          onFocus={() => this.props.onEditModeOn(true)}
          //color={'white'}
        />
      </View>
    );
  }
}

export default EditAffirmationCard;
