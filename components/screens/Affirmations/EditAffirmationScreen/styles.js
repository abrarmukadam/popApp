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
    top: 50,
    left: 30,
  },
  trashButtonStyle: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  sendButtonStyle: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
});
