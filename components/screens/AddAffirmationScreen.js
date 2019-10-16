import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddAffirmationScreen extends React.Component {
  state = {text: ''};
  onTextChange = text => {
    this.setState({text});
  };

  onPressAdd = () => {
    let addItem = {
      id: this.props.screenProps.popArray.length + 1,
      popMessage: this.state.text,
      backColor: '#ffebcd',
    };

    this.props.screenProps.updatePopArray([
      ...this.props.screenProps.popArray,
      addItem,
    ]);
    this.props.navigation.navigate('Details', {
      popItem: addItem,
      popMessage: addItem.popMessage,
      backColor: addItem.backColor,
      id: addItem.id,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'center',
          padding: 20,
          backgroundColor: 'lightyellow',
        }}>
        <TextInput
          style={{fontSize: 25}}
          placeholder={'Type Here...'}
          value={this.state.text}
          onChangeText={this.onTextChange.bind(this)}
          autoFocus
          padding={10}
          color="black"
          backgroundColor="lightgray"></TextInput>

        <View
          style={{
            marginRight: 5,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 4,
          }}>
          <Button
            padding="25"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
            title="Back"
          />
          <TouchableOpacity onPress={this.onPressAdd}>
            <Icon name="md-send" size={40} color="blue"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
