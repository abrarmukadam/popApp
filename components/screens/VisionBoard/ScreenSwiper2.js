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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BackgroundImage} from './../../index';

class ScreenSwiper2 extends Component {
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
        console.log(this.state.buttonPlay);
        if (this.state.page < length) this.go(this.state.page);
        this.setState({page: this.state.page + 1});
        if (this.state.page >= length) this.setState({page: 0});
      }, 2000);
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
    //    this.setState({temp: 1});
    this.props.onClickDelete(vision);
    //    this.setState({index: tempIndex});
  };
  onPressBack = () => {
    clearInterval(this.state.intervalId);
    this.props.onClickBack();
  };

  render() {
    let tempIndex = this.props.itemIndex;

    let toBeDisplayedList = [
      //      this.props.list[this.props.list.length - 1],
      ...this.props.list,
      //     this.props.list[0],
    ];

    console.log(toBeDisplayedList);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'darkcyan'}}>
        <BackgroundImage></BackgroundImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: 'white',
          }}>
          <View style={{marginLeft: 5}}>
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
          </View>
        </View>
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

            // if (tempIndex == this.props.list.length + 1) {
            //   this.setState({index: 0});
            //   console.log('TRU TUR TUURR');
            //   this.viewPager.setPage(1);
            // }
            // if (tempIndex == 0) {
            //   this.setState({index: 0});
            //   console.log('TRU TUR TUURR');
            //   this.viewPager.setPage(this.props.list.length);
            // }
            // console.log(tempIndex);
            //            this.setState({index});
          }}>
          {toBeDisplayedList.map(items => {
            return (
              <View key={items.id} style={{flex: 1}}>
                {<Image source={{uri: items.uri}} style={styles.image}></Image>}
                <View style={styles.textViewStyle}>
                  <Text style={styles.textStyle}>{items.visionMessage}</Text>
                </View>
              </View>
            );
          })}
        </ViewPager>
        {/*
        <Icon
          name="play-box-outline"
          size={40}
          color="black"
          onPress={() => this.setState({autoplay: !this.state.autoplay})}
        />
      */}
      </SafeAreaView>
    );
  }
}

export default ScreenSwiper2;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  textViewStyle: {
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: 'darkcyan',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    //    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 20,
  },
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
});
