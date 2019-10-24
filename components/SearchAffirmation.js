import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class SearchAffirmation extends Component {
  constructor(props) {
    super(props);
  }
  OnSearchTextChange = text => {
    this.props.OnSearchChange(text);
  };

  render() {
    return (
      <View style={styles.SearchBoxStyle}>
        <TextInput
          placeholder="  Search here..."
          onChangeText={this.OnSearchTextChange.bind(this)}
          //         clearButtonMode="always"
          style={styles.TextStyle}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SearchBoxStyle: {
    borderWidth: 0.2,
    borderRadius: 20,
    margin: 6,
    padding: 6,
    backgroundColor: 'white',
  },
  TextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 2,
  },
});
