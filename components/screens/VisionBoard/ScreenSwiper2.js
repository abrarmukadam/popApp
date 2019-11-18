import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BackgroundImage} from './../../index';

class ScreenSwiper2 extends Component {
  state = {index: this.props.itemIndex};

  onPressDelete = tempIndex => {
    //    this.setState({temp: 1});
    this.props.onClickDelete(tempIndex);
    //    this.setState({index: tempIndex});
  };
  onPressBack = () => {
    this.props.onClickBack();
  };

  render() {
    let tempIndex = this.props.itemIndex;
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
              onPress={() => this.onPressDelete(tempIndex)}></Icon>
          </View>
        </View>
        <ViewPager
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
          style={styles.viewPager}
          initialPage={this.state.index}
          transitionStyle="scroll"
          onPageSelected={e => {
            tempIndex = e.nativeEvent.position;
            if (tempIndex == this.props.list.length - 1) {
              this.setState({index: 0});
              //              console.log('TRU TUR TUURR');
              //    viewPager.setPage(0);
            }
            console.log(tempIndex);
            //            this.setState({index});
          }}>
          {this.props.list.map(items => {
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
