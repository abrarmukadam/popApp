import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Icon from 'react-native-vector-icons/Ionicons';
import {BackgroundImage} from './../../index';
import styles from './styles';

class VisionFullScreenSwiper extends Component {
  state = {index: this.props.itemIndex, buttonPlay: 'true'};
  constructor(props) {
    super(props);
    this.viewPager = React.createRef();
  }

  onPressPlay = currentPage => {
    let length = this.props.list.length;
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

  go = page => {
    this.viewPager.current.setPage(page);
  };

  onPressDeleteWarning = vision => {
    const deletHeader = 'Delete Dream?';
    const deletMessage = 'Do you wish to Delete the selected Dream?';
    clearInterval(this.state.intervalId);

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
            this.onPressDelete(vision);
          },
        },
      ],
      {cancelable: false},
    );
  };

  onPressDelete = vision => {
    this.props.onClickDelete(this.props.list[vision]);
  };
  onPressBack = () => {
    clearInterval(this.state.intervalId);
    this.props.onClickBack();
  };

  render() {
    let tempIndex = this.props.itemIndex;

    let toBeDisplayedList = [...this.props.list];

    return (
      <View style={styles.container}>
        <BackgroundImage></BackgroundImage>

        <ViewPager
          ref={this.viewPager}
          style={styles.viewPager}
          initialPage={this.state.index}
          transitionStyle="scroll"
          onPageSelected={e => {
            tempIndex = e.nativeEvent.position;
            this.setState({
              index: tempIndex,
            });
          }}>
          {toBeDisplayedList.map(items => {
            return (
              <View key={items.id} style={{flex: 1, justifyContent: 'center'}}>
                {<Image source={{uri: items.uri}} style={styles.image}></Image>}
                <View style={styles.textViewStyle}>
                  <View style={styles.textViewStyle1}></View>
                  <Text style={styles.textStyle}>{items.visionMessage}</Text>
                </View>
              </View>
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
            onPress={() => this.onPressDeleteWarning(this.state.index)}
          />
        </SafeAreaView>

        {/* <View style={{marginLeft: 5}}>
          <Icon
            name="keyboard-backspace"
            size={40}
            color="white"
            onPress={() => this.onPressBack()}></Icon>
        </View>
        <View style={{alignItems: 'center', flex: 4}}>
          <Text style={styles.Heading}>{this.props.header}</Text>
        </View>
        <View style={{marginRight: 5, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.onPressPlay(this.state.index)}>
            <Icon
              name={this.state.buttonPlay ? 'play' : 'stop'}
              size={40}
              color="white"></Icon>
          </TouchableOpacity>

          <Icon
            name="delete"
            size={40}
            color="white"
            onPress={() => this.onPressDeleteWarning(tempIndex)}></Icon>
        </View> */}
      </View>
    );
  }
}

export default VisionFullScreenSwiper;
