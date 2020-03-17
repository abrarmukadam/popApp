import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

let tempIcon = 'circle'; //'bullseye'
let icon1 = 'dot-circle-o';
let icon2 = 'circle';
let iconSize = 36;

export default class BackgroundColor extends Component {
  state = {
    color: this.props.selectedColor,
  };
  render() {
    let colorArray = this.props.colorArray;

    return (
      <View style={[styles.ButtonContainer]}>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[0] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[0] ? 'lightgrey' : colorArray[0]
            }
            onPress={backColor => {
              this.setState({color: colorArray[0]});
              this.props.onPressColor(colorArray[0]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[1] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[1] ? 'lightgrey' : colorArray[1]
            }
            onPress={backColor => {
              this.setState({color: colorArray[1]});
              this.props.onPressColor(colorArray[1]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[2] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[2] ? 'lightgrey' : colorArray[2]
            }
            onPress={backColor => {
              this.setState({color: colorArray[2]});
              this.props.onPressColor(colorArray[2]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[3] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[3] ? 'lightgrey' : colorArray[3]
            }
            onPress={backColor => {
              this.setState({color: colorArray[3]});
              this.props.onPressColor(colorArray[3]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[4] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[4] ? 'lightgrey' : colorArray[4]
            }
            onPress={backColor => {
              this.setState({color: colorArray[4]});
              this.props.onPressColor(colorArray[4]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[5] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[5] ? 'lightgrey' : colorArray[5]
            }
            onPress={backColor => {
              this.setState({color: colorArray[5]});
              this.props.onPressColor(colorArray[5]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[6] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[6] ? 'lightgrey' : colorArray[6]
            }
            onPress={backColor => {
              this.setState({color: colorArray[6]});
              this.props.onPressColor(colorArray[6]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[7] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[7] ? 'lightgrey' : colorArray[7]
            }
            onPress={backColor => {
              this.setState({color: colorArray[7]});
              this.props.onPressColor(colorArray[7]);
            }}
          />
        </View>
        <View style={styles.ButtonPadding}>
          <Icon
            name={this.state.color == colorArray[8] ? icon1 : icon2}
            size={iconSize}
            color={
              this.state.color == colorArray[8] ? 'lightgrey' : colorArray[8]
            }
            onPress={backColor => {
              this.setState({color: colorArray[8]});
              this.props.onPressColor(colorArray[8]);
            }}
          />
        </View>
      </View>
    );

    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[0]}]}
          onPress={backColor => {
            color = colorArray[0];
            this.props.onPressColor(color);
          }}></TouchableOpacity>
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[1]}]}
          onPress={backColor => {
            color = colorArray[1];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[2]}]}
          onPress={backColor => {
            color = colorArray[2];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[3]}]}
          onPress={backColor => {
            color = colorArray[3];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[4]}]}
          onPress={backColor => {
            color = colorArray[4];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[5]}]}
          onPress={backColor => {
            color = colorArray[5];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[6]}]}
          onPress={backColor => {
            color = colorArray[6];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[7]}]}
          onPress={backColor => {
            color = colorArray[7];
            this.props.onPressColor(color);
          }}
        />
        <TouchableOpacity
          style={[styles.myButton, {backgroundColor: colorArray[8]}]}
          onPress={backColor => {
            color = colorArray[8];
            this.props.onPressColor(color);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ButtonContainer: {
    paddingLeft: 6,
    flexDirection: 'row',
    //borderWidth: 1,
    //  margin: ,
  },
  ButtonPadding: {
    //    paddingLeft: 2,
    //    padding: '0.5%',
    flex: 10,
    //    width: '11%',
  },
});
