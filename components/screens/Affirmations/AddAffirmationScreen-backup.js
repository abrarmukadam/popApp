import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundColor} from '../../index';

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
        <KeyboardAvoidingView
          style={styles.container2}
          behavior="height"
          enabled>
          <View style={styles.closeButton}>
            <Icon
              name="md-close"
              size={40}
              color="white"
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}></Icon>
          </View>
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
          </View>
          <View style={styles.addButton}>
            <BackgroundColor
              selectedColor={this.props.screenProps.colorArray[0]}
              onPressColor={this.onPressColor}
              colorArray={this.props.screenProps.colorArray}
            />
            <TouchableOpacity
              style={{
                marginBottom: 6,
                paddingRight: 20,
              }}
              onPress={this.onPressAdd}>
              <Icon name="md-send" size={40} color="white"></Icon>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    //    alignItems: 'stretch',
    justifyContent: 'space-between',
    color: 'white',
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    color: 'white',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
  },
  addButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 20,
    padding: 2,
    color: 'white',
  },
  closeButton: {
    //    padding: 20,
    color: 'white',
    //    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  AffDetails: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    //    flexWrap: 'wrap',
  },
});
