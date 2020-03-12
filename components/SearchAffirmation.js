import React, {Component} from 'react';
import {StyleSheet, TextInput, View, KeyboardAvoidingView} from 'react-native';

export default class SearchAffirmation extends Component {
  constructor(props) {
    super(props);
  }
  OnSearchTextChange = text => {
    this.props.OnSearchChange(text);
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.SearchBoxStyle}
        behavior="height"
        enabled>
        <TextInput
          placeholder="Search here..."
          onChangeText={text => this.OnSearchTextChange(text)}
          //         clearButtonMode="always"
          style={styles.TextStyle}></TextInput>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  SearchBoxStyle: {
    height: 42,
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 20,
    margin: 6,
    backgroundColor: '#fff',
  },
  TextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 2,
    paddingStart: 10,
  },
});
