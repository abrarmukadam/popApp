import React, {Component} from 'react';
import styles from './styles';
import {View, SafeAreaView, TextInput, Text} from 'react-native';

class EditAffirmationCard extends Component {
  state = {affirmationMessage: this.props.affirmation.popMessage};
  render() {
    // console.log('selected affirmation', this.props.affirmation);
    return (
      <SafeAreaView
        style={[styles.container, {backgroundColor: this.props.onColorChange}]}>
        {/* <ScrollView> */}
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
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}

export default EditAffirmationCard;
