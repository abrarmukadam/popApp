import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundColor} from './../../../index';

import {EditAffirmationCard} from './../../../SubComponents/EditAffirmationCard/index';
import styles from './styles';
import {colorArray} from './../../../ColorList';
class EditAffirmationScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    editModeOn: false,
    backColor: this.props.navigation.getParam('selectedCard').backColor,
    affirmationMessage: this.props.navigation.getParam('selectedCard')
      .popMessage,
  };

  onPressSave = () => {
    const updatedAffirmation = {
      id: this.props.navigation.getParam('selectedCard').id,
      popMessage: this.state.affirmationMessage,
      backColor: this.state.backColor,
    };
    let updatedAffirmationList = [...this.props.affirmationList];
    updatedAffirmationList[updatedAffirmation.id - 1] = updatedAffirmation;

    this.props.onEditAffirmation(updatedAffirmationList);
    this.props.navigation.navigate('Home');
  };

  onPressBinWarning = () => {
    const deletHeader = 'Delete Affirmation ?';
    const deletMessage = 'Do you wish to Delete the selected Affirmation?';
    Alert.alert(
      deletHeader,
      deletMessage,
      [
        {
          text: 'Cancel',
          onPress: () => {
            return;
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            this.onPressBin();
          },
        },
      ],
      {cancelable: false},
    );
  };

  onPressBin = () => {
    let toDeleteCard = this.props.navigation.getParam('selectedCard');
    let tempArray = [...this.props.affirmationList];
    let todoArray = tempArray.filter(item => item.id !== toDeleteCard.id);
    todoArray.map(temp => {
      if (temp.id > toDeleteCard.id) temp.id = temp.id - 1;
    });

    this.props.deleteAffirmation(todoArray);

    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backColor}]}>
        <EditAffirmationCard
          onChangeAffirmation={newMessage =>
            this.setState({affirmationMessage: newMessage})
          }
          onColorChange={this.state.backColor}
          affirmation={this.props.navigation.getParam('selectedCard')}
          onEditModeOn={value => this.setState({editModeOn: value})}
        />
        <View style={styles.backButtonStyle}>
          <Icon
            name="md-arrow-back"
            size={40}
            color="white"
            onPress={() => this.props.navigation.navigate('Home')}></Icon>
        </View>
        <View style={styles.trashButtonStyle}>
          <Icon
            name="md-trash"
            size={40}
            color="white"
            onPress={() => this.onPressBinWarning()}
          />
        </View>
        {this.state.editModeOn && (
          <BackgroundColor
            selectedColor={
              this.props.navigation.getParam('selectedCard').backColor
            }
            onPressColor={color => this.setState({backColor: color})}
            colorArray={colorArray}
          />
        )}
        {this.state.editModeOn && (
          <TouchableOpacity
            style={styles.sendButtonStyle}
            onPress={this.onPressSave}>
            <Icon name="md-send" size={40} color="white"></Icon>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default EditAffirmationScreen;
