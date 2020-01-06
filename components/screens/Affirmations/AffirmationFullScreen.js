import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewPager from '@react-native-community/viewpager';
import {BackgroundImage} from './../../index';

class AffirmationFullScreen extends Component {
  state = {
    text: this.props.navigation.getParam('popMessage'),
    backColor: this.props.navigation.state.params.popItem.backColor,
    //backColor: 'red',
    popArray: [],
    page: 0,
    buttonPlay: 'true',
    index: 0,
    intervalId: 0,
  };

  constructor(props) {
    super(props);
    this.viewPager = React.createRef();
  }
  onPressEdit = popItem => {
    clearInterval(this.state.intervalId);
    this.props.navigation.navigate('Edit', {
      popItem: popItem,
      //      popMessage: popItem.popMessage,
      popMessage: this.props.screenProps.popArray[popItem.id - 1].popMessage,
      backColor: popItem.backColor,
      id: popItem.id,
    });
  };
  onPressPlay = currentPage => {
    let length = this.props.screenProps.popArray.length;
    this.setState({buttonPlay: !this.state.buttonPlay});

    console.log('buttonPlay', this.state.buttonPlay);
    this.setState({page: currentPage});
    if (this.state.buttonPlay) {
      let intervalId = setInterval(() => {
        console.log(this.state.buttonPlay);
        if (this.state.page < length) this.go(this.state.page);
        this.setState({page: this.state.page + 1});
        if (this.state.page >= length) this.setState({page: 0});
      }, 2000);
      this.setState({intervalId: intervalId});
    } else clearInterval(this.state.intervalId);
    // if (!this.state.buttonPlay) {
    //   clearInterval(intervalId);
    // }
  };

  go = page => {
    this.viewPager.current.setPage(page);
  };

  render() {
    let toBeDisplayedList = [...this.props.screenProps.popArray];

    return (
      <SafeAreaView
        //        key={items.id}
        style={[
          styles.safeAreaView,
          //        ,
          {backgroundColor: this.state.backColor}, //items.backColor}
        ]}>
        {/* <BackgroundImage /> */}

        <View
          style={
            (styles.addButton,
            {
              alignItems: 'flex-start',
              paddingLeft: 25,
              paddingRight: 25,
              //              paddingTop: 25,
              //              marginTop: 40,

              flexDirection: 'row',
              justifyContent: 'space-between',
            })
          }>
          <Icon
            name="keyboard-backspace"
            size={40}
            color="white"
            onPress={() => {
              clearInterval(this.state.intervalId);
              this.props.navigation.navigate('Home');
            }}></Icon>
          <View style={styles.addButton}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.onPressPlay(this.state.index)}>
              <Icon
                name={this.state.buttonPlay ? 'play' : 'stop'}
                size={40}
                color="white"></Icon>
            </TouchableOpacity>
            <Icon
              name="square-edit-outline"
              size={40}
              color="white"
              onPress={
                () =>
                  this.onPressEdit(
                    this.props.screenProps.popArray[this.state.index],
                  )
                //                    this.onPressEdit(this.props.navigation.getParam('popItem'))
              }
            />
          </View>
        </View>
        {
          <ViewPager
            style={styles.viewPager}
            initialPage={this.props.navigation.getParam('popItem').id - 1}
            ref={this.viewPager}
            onPageSelected={e => {
              let tempIndex = e.nativeEvent.position;
              this.setState({
                index: tempIndex,
                //                backColor: this.props.navigation.getParam('popItem').backColor,
                backColor: this.props.screenProps.popArray[tempIndex].backColor,
              });

              //            this.setState({index});
            }}>
            {toBeDisplayedList.map(items => {
              return (
                <View
                  key={items.id}
                  style={[
                    styles.AffDetails,
                    {backgroundColor: items.backColor},
                  ]}>
                  <Text
                    style={{fontSize: 35, textAlign: 'center', color: 'white'}}
                    multiline
                    numberOfLines={4}
                    padding={10}
                    //color={'white'}
                  >
                    {items.popMessage}
                  </Text>
                </View>
              );
            })}
          </ViewPager>
        }
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
  },
  buttonStyle: {
    marginRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    //    padding: 10,
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
    flexDirection: 'row',
    //   paddingBottom: 20,
    paddingRight: 20,
    padding: 2,
    color: 'white',
  },
  AffDetails: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPager: {
    flex: 1,
  },
});

export default AffirmationFullScreen;
