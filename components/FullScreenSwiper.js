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
  state = {autoplay: 'false'};

  onPressBack = () => {
    this.props.onClickBack();
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'darkcyan'}}>
        <BackgroundImage></BackgroundImage>

        <View style={{alignSelf: 'flex-start'}}>
          <Button title="Back" onPress={() => this.onPressBack()}></Button>
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
});

export default FullScreenSwiper;
