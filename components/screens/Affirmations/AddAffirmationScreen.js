import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundColor} from './../../index';

export default class AddAffirmationScreen extends Component {
  state = {text: '', backColor: this.props.screenProps.colorArray[0]};
  onTextChange = text => {
    this.setState({text});
  };

  onPressAdd = () => {
    let addItem = {
      id: this.props.screenProps.popArray.length + 1,
      popMessage: this.state.text,
      backColor: this.state.backColor,
    };

    this.props.screenProps.updatePopArray([
      ...this.props.screenProps.popArray,
      addItem,
    ]);
    //    this.props.screenProps.updateData(addItem);
    this.props.navigation.navigate('Home', this.state.text);
  };
  onPressColor = color => {
    this.setState({backColor: color});
  };

  render() {
    return (
      <SafeAreaView
        style={[styles.safeAreaView, {backgroundColor: this.state.backColor}]}>
        <View style={styles.container1}>
          <View
            style={(styles.addButton, {alignItems: 'flex-start', padding: 25})}>
            <Icon
              name="md-close"
              size={40}
              color="white"
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}></Icon>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.AffDetails}>
            <TextInput
              style={styles.textInputStyle}
              placeholder={'TypeHere...'}
              multiline
              numberOfLines={4}
              value={this.state.text}
              onChangeText={this.onTextChange.bind(this)}
              autoFocus
              padding={10}
              //color="white"
            ></TextInput>
            <BackgroundColor
              selectedColor={this.props.screenProps.colorArray[0]}
              onPressColor={this.onPressColor}
              colorArray={this.props.screenProps.colorArray}
            />
          </View>
          <View style={styles.addButton}>
            <TouchableOpacity onPress={this.onPressAdd}>
              <Icon name="md-send" size={40} color="blue"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  },
  safeAreaView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 20,
    color: 'white',
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    color: 'white',
  },
  container2: {
    flex: 2,
    justifyContent: 'space-between',
    color: 'white',
  },
  addButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    color: 'white',
  },
  AffDetails: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    //    flexWrap: 'wrap',
  },
});
