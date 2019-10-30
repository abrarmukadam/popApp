import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BackgroundImage} from './index';
class FullScreenSwiper extends Component {
  state = {autoplay: 'false', index: this.props.itemIndex};

  onPressDelete = () => {
    this.props.onClickDelete(this.state.index);
  };
  onPressBack = () => {
    this.props.onClickBack();
  };
  render() {
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
          <View style={{marginRight: 5}}>
            <Icon
              name="delete"
              size={40}
              color="white"
              onPress={() => this.onPressDelete()}></Icon>
          </View>
        </View>

        {/*
        <Icon
          name="play-box-outline"
          size={40}
          color="black"
          onPress={() => this.setState({autoplay: !this.state.autoplay})}
        />
 */}
        <Swiper
          style={styles.wrapper}
          //          onIndexChanged={index => this.handleOnIndexChanged(index)}
          onIndexChanged={index => {
            this.setState({index});
          }}
          showsButtons={false}
          //          autoplay={this.state.autoplay}
          index={this.props.itemIndex}>
          {this.props.list.map(items => {
            return (
              <View style={{flex: 1}}>
                {<Image source={{uri: items.uri}} style={styles.image}></Image>}
                <View style={styles.textViewStyle}>
                  <Text style={styles.textStyle}>{items.visionMessage}</Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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

export default FullScreenSwiper;
