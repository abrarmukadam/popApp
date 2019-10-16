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

import BackgroundColor from './../BackgroundColor';
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

  render() {
    return (
      <SafeAreaView
        style={[styles.safeAreaView, {backgroundColor: this.state.backColor}]}>
        <View style={{padding: 5}}>
          <View style={styles.buttonStyle}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
              title="Back"
            />
            <Button onPress={this.onPressSave.bind(this)} title="Save" />
          </View>
          <View style={{alignItems: 'center'}}>
            <TextInput
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
              }}
              //value="ABC"
              value={this.state.text}
              onChangeText={this.onTextChange.bind(this)}
              autoFocus
            />
          </View>
        </View>
        <Text>
          This is where you will Edit the Name, pop-up time, type, etc....
        </Text>

        <TouchableOpacity
          style={{alignItems: 'flex-end', padding: 30}}
          onPress={this.onPressAdd}>
          <Icon name="md-send" size={40} color="blue"></Icon>
        </TouchableOpacity>

        <BackgroundColor onPressColor={this.onPressColor} />
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
});
