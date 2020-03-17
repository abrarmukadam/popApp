import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Alert, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundColor} from './../../../index';
import ViewPager from '@react-native-community/viewpager';

import {EditAffirmationCard} from './../../../SubComponents/EditAffirmationCard/index';
import styles from './styles';
import {colorArray} from './../../../ColorList';
class EditAffirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.viewPager = React.createRef();
  }
  state = {
    index: 0,
    intervalId: 0,
    page: 0,
    buttonPlay: true,

    editModeOn: false,
    backColor: this.props.navigation.getParam('selectedCard').backColor,
    affirmationMessage: this.props.navigation.getParam('selectedCard')
      .popMessage,
  };

  onPressSave = () => {
    clearInterval(this.state.intervalId);
    const updatedAffirmation = {
      id: this.state.index + 1,
      //      id: this.props.navigation.getParam('selectedCard').id,
      popMessage: this.state.affirmationMessage,
      backColor: this.state.backColor,
    };
    let updatedAffirmationList = [...this.props.affirmationList];
    updatedAffirmationList[updatedAffirmation.id - 1] = updatedAffirmation;

    this.props.onEditAffirmation(updatedAffirmationList);
    this.props.navigation.navigate('Home');
  };

  onPressBinWarning = () => {
    clearInterval(this.state.intervalId);
    this.setState({buttonPlay: true});
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
    //    let toDeleteCard = this.props.navigation.getParam('selectedCard');
    let toDeleteCard = this.props.affirmationList[this.state.index];
    let tempArray = [...this.props.affirmationList];
    let todoArray = tempArray.filter(item => item.id !== toDeleteCard.id);
    todoArray.map(temp => {
      if (temp.id > toDeleteCard.id) temp.id = temp.id - 1;
    });

    this.props.deleteAffirmation(todoArray);

    this.props.navigation.navigate('Home');
  };
  onPressPlay = currentPage => {
    let length = this.props.affirmationList.length;
    this.setState({buttonPlay: !this.state.buttonPlay});

    this.setState({page: currentPage});
    if (this.state.buttonPlay) {
      let intervalId = setInterval(() => {
        if (this.state.page >= length - 1) this.setState({page: 0});
        else this.setState({page: this.state.page + 1});

        if (this.state.page < length) this.go(this.state.page);
      }, 3500);
      this.setState({intervalId: intervalId});
    } else clearInterval(this.state.intervalId);
  };
  onPressBack = () => {
    clearInterval(this.state.intervalId);

    //if (!this.state.editModeOn)
    this.props.navigation.navigate('Home');

    // if (this.state.editModeOn) {
    //   this.props.navigation.navigate('EditAffirmationScreen', {
    //     selectedCard: this.props.affirmationList[this.state.index],
    //   });
    //   this.setState({editModeOn: false});
    // }
  };
  go = page => {
    if (this.state.editModeOn) this.setState({editModeOn: false});
    this.viewPager.current.setPage(page);
  };

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backColor}]}>
        <ViewPager
          style={styles.viewPager}
          // initialPage={this.props.navigation.getParam('popItem').id - 1}
          initialPage={this.props.navigation.getParam('selectedCard').id - 1}
          ref={this.viewPager}
          scrollEnabled={!this.state.editModeOn}
          onPageScrollStateChanged={e => {}}
          onPageSelected={e => {
            let tempIndex = e.nativeEvent.position;
            this.setState({
              //   //  editModeOn: false,
              index: tempIndex,
              //   //       //                backColor: this.props.navigation.getParam('popItem').backColor,
              backColor: this.props.affirmationList[tempIndex].backColor,
            });

            //     //            this.setState({index});
          }}>
          {this.props.affirmationList.map(item => {
            return (
              // <View style={[{justifyContent: 'center', height: '90%'}]}>
              //   <Text>123</Text>
              // </View>
              <EditAffirmationCard
                key={item.id}
                onChangeAffirmation={newMessage =>
                  this.setState({affirmationMessage: newMessage})
                }
                onColorChange={this.state.backColor}
                affirmation={item}
                //                affirmation={this.props.navigation.getParam('selectedCard')}
                onEditModeOn={value => {
                  clearInterval(this.state.intervalId);

                  this.setState({editModeOn: value, buttonPlay: true});
                }}
              />
            );
          })}
        </ViewPager>
        <SafeAreaView style={styles.backButtonStyle}>
          <Icon
            name="md-arrow-back"
            size={40}
            color="white"
            onPress={() => this.onPressBack()}></Icon>
        </SafeAreaView>
        <SafeAreaView style={styles.buttonStyle}>
          <Icon
            name={this.state.buttonPlay ? 'ios-play' : 'ios-square'}
            size={40}
            onPress={() => this.onPressPlay(this.state.index)}
            color="white"></Icon>
        </SafeAreaView>
        <SafeAreaView style={styles.trashButtonStyle}>
          <Icon
            name="md-trash"
            size={40}
            color="white"
            onPress={() => this.onPressBinWarning()}
          />
        </SafeAreaView>
        {this.state.editModeOn && (
          <BackgroundColor
            selectedColor={
              this.props.affirmationList[this.state.index].backColor
            }
            onPressColor={color => this.setState({backColor: color})}
            colorArray={colorArray}
          />
        )}
        {this.state.editModeOn && (
          //          <SafeAreaView>
          <TouchableOpacity
            style={styles.sendButtonStyle}
            onPress={() => {
              this.onPressSave();
            }}>
            <Icon name="md-send" size={40} color="white"></Icon>
          </TouchableOpacity>
          //        </SafeAreaView>
        )}
      </View>
    );
  }
}

export default EditAffirmationScreen;
