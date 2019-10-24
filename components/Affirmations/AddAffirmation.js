import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class AddAffirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  OnAddTextChange = text => {
    this.setState({text});
  };
  OnAddAffirmation = () => {
    this.props.OnAddAffirmation(this.state.text);
  };

  render() {
    return (
      <View style={styles.AffView}>
        <TextInput
          placeholder="  Enter here..."
          onChangeText={this.OnAddTextChange.bind(this)}
          //         clearButtonMode="always"
          style={styles.AffStyle}></TextInput>
        <Button
          title="Add+"
          onPress={this.OnAddAffirmation.bind(this)}
          //      placeholder="  Enter here..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AffView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderWidth: 0.2,
  },
  AffStyle: {
    fontSize: 20,
  },
});
