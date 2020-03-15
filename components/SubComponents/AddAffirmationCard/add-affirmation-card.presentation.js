import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import {BackgroundColor} from './../../index';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorArray} from './../../ColorList';

class AddAffirmationCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    newAffirmation: [],
    text: '',
    backColor: colorArray[0],
  };

  onPressSend = () => {
    let newAffirmation = {
      id: this.props.affirmationList.length + 1,
      popMessage: this.state.text,
      backColor: this.state.backColor,
    };
    //    this.props.handleAddAffirmation(newAffirmation)
    this.props.addAffirmation(newAffirmation);

    this.props.returnToHome();
  };

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backColor}]}>
        <View style={styles.AffDetails}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={'Type Here ...'}
            multiline={true}
            //            numberOfLines={4}
            //            value={this.state.text}
            onChangeText={text => this.setState({text: text})}
            autoFocus
            padding={10}
            //color="white"
          />
        </View>
        <View style={styles.colorButtonContainer}>
          <BackgroundColor
            selectedColor={colorArray[0]}
            onPressColor={color => this.setState({backColor: color})}
            colorArray={colorArray}
          />

          <TouchableOpacity
            style={styles.sendButtonStyle}
            disabled={this.state.text == false}
            onPress={() => {
              this.onPressSend();
            }}>
            <Icon
              name="md-send"
              size={40}
              color={this.state.text ? 'white' : 'lightgrey'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AddAffirmationCard;
