import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
    //    height: '100%',
  },
  textInputStyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  staticText: {
    margin: 30,
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
  },
  backButtonStyle: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  sendButtonStyle: {
    // justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
    paddingRight: 10,
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
  container2: {
    //    flex: 2,
    // width: '100%',
    // height: '100%',
  },
  container3: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    //    flexDirection: 'column',
  },
});

export default styles;
