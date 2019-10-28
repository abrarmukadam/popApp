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

import {BackgroundColor} from './../../index';
import Icon from 'react-native-vector-icons/Ionicons';

//this.props.navigation.state.params.movieId.title}
export default class AffirmationEditScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    text: this.props.navigation.getParam('popMessage'),
    backColor: this.props.navigation.state.params.popItem.backColor,
  };
  constructor(props) {
    super(props);
  }
  onTextChange = text => {
    this.setState({text});
  };

  onPressSave = () => {
    let newPopArray = [...this.props.screenProps.popArray];
    this.props.screenProps.popArray[
      this.props.navigation.getParam('id') - 1
    ].popMessage = this.state.text;
    this.props.screenProps.popArray[
      this.props.navigation.getParam('id') - 1
    ].backColor = this.state.backColor;

    this.props.screenProps.updatePopArray(newPopArray);

    this.props.navigation.navigate('Home', {
      popMessage: this.props.screenProps.popArray[
        this.props.navigation.getParam('id') - 1
      ].popMessage,
    });
  };

  onPressColor = color => {
    this.setState({backColor: color});

    this.props.navigation.navigate('Details', {
      popMessage: this.props.screenProps.popArray[
        this.props.navigation.getParam('id') - 1
      ].backColor,
    });
  };
  onPressBin = () => {
    let popItem = this.props.navigation.getParam('popItem');
    let todoArray = [
      ...this.props.screenProps.popArray.filter(item => item.id !== popItem.id),
    ];
    this.props.screenProps.popArray.map(temp => {
      if (temp.id > popItem.id) temp.id = temp.id - 1;
    });
    this.props.screenProps.updatePopArray(todoArray);

    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView
        style={[styles.safeAreaView, {backgroundColor: this.state.backColor}]}>
        <View style={styles.container1}>
          <View
            style={
              (styles.addButton,
              {
                alignItems: 'flex-start',
                padding: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
              })
            }>
            <Icon
              name="md-close"
              size={40}
              color="blue"
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}></Icon>
            <Icon
              name="md-trash"
              size={40}
              color="blue"
              onPress={() => this.onPressBin()}></Icon>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.AffDetails}>
            <TextInput
              style={{fontSize: 35, textAlign: 'center'}}
              placeholder={'Type Here...'}
              value={this.state.text}
              multiline
              numberOfLines={4}
              onChangeText={text => this.onTextChange(text)}
              autoFocus
              padding={10}
              color="back"></TextInput>
            <BackgroundColor
              onPressColor={color => this.onPressColor(color)}
              colorArray={this.props.screenProps.colorArray}
              selectedColor={
                this.props.screenProps.popArray[
                  this.props.navigation.getParam('id') - 1
                ].backColor
              }
            />
          </View>
          <View style={styles.addButton}>
            <TouchableOpacity onPress={this.onPressSave}>
              <Icon name="md-send" size={40} color="blue"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'stretch',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 10,

    marginBottom: 10,
  },
  buttonStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 2,
    justifyContent: 'space-between',
  },
  addButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  AffDetails: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});