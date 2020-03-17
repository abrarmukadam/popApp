import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  backButtonStyle: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  trashButtonStyle: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  sendButtonStyle: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingBottom: 40,
  },
  viewPager: {
    justifyContent: 'center',
    height: '90%',
    borderColor: 'black',
  },
  buttonStyle: {
    position: 'absolute',
    top: 10,
    right: 80,
    //    padding: 10,
  },
});
