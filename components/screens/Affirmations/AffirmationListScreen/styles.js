import {StyleSheet, Dimensions} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  safeAreaView: {
    width: WIDTH,

    flex: 1,
  },
});
