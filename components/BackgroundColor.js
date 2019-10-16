import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

let color = '';
export default class BackgroundColor extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: '#ffebcd'}]}
          onPress={backColor => {
            color = '#ffebcd';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'lightblue'}]}
          onPress={backColor => {
            color = 'lightblue';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'blue'}]}
          onPress={backColor => {
            color = 'blue';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'skyblue'}]}
          onPress={backColor => {
            color = 'skyblue';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'lightgreen'}]}
          onPress={backColor => {
            color = 'lightgreen';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'yellow'}]}
          onPress={backColor => {
            color = 'yellow';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'pink'}]}
          onPress={backColor => {
            color = 'pink';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'rgb(195, 125, 198)'}]}
          onPress={backColor => {
            color = 'rgb(195, 125, 198)';
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: 'purple'}]}
          onPress={backColor => {
            color = 'purple';
            this.props.onPressColor(color);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myButton: {
    margin: 3,
    padding: 5,
    height: 33,
    width: 33, //The Width must be the same as the height
    borderRadius: 60, //Then Make the Border Radius twice the size of width or Height
    borderWidth: 0.3,
    //    borderColor: 'black',
  },
});
