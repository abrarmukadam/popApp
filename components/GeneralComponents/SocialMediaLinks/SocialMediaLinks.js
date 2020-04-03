import React, {Component} from 'react';
import {Linking, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
const INSTA_LINK = 'https://www.instagram.com/ziel.lightupyourdreams/';

class SocialMediaLinks extends Component {
  state = {};
  render() {
    const pos = this.props.userLoggedIn ? 'absolute' : 'relative';
    return (
      <View style={[styles.container, {position: pos}]}>
        <View style={styles.ContactStyles}>
          {/* <Text style={styles.ContactTextStyle}>Connect with us:</Text> */}
          <TouchableOpacity onPress={() => Linking.openURL(INSTA_LINK)}>
            <Image
              style={styles.InstaLogo}
              source={require('../images/instagram_image.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('mailto:ziel.development@gmail.com')
            }>
            <Image
              style={styles.EmailLogo}
              source={require('../images/email_image.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.DemoStyle}>
          <Text style={styles.ContactTextStyle}>Demo:</Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('http://g.recordit.co/A4gEvjmfb4.gif')
            }>
            <Text style={styles.DemoText}> Link1</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SocialMediaLinks;
