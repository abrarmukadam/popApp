import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    width: WIDTH,
  },
  AffDetails: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AffTextStyle: {fontSize: 35, textAlign: 'center', color: 'white'},
  sendButtonStyle: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
});
