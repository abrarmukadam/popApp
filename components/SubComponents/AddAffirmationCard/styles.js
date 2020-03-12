import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: WIDTH,
  },
  AffDetails: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  colorButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 20,
    padding: 2,
    color: 'white',
  },
  textInputStyle: {
    fontSize: 35,
    //    textAlign: 'center',
    color: 'white',
  },
  sendButtonStyle: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
});

export default styles;
