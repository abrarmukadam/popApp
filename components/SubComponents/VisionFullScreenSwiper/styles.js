import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    //    alignItems: 'center',
    //    flex: 1,
    // paddingTop: '20%',
    height: '100%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    width: WIDTH,
  },
  viewPager: {
    flex: 1,
  },
  backButtonStyle: {
    position: 'absolute',
    top: 10,
    left: 20,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  trashButtonStyle: {
    position: 'absolute',
    top: 10,
    right: 20,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  sendButtonStyle: {
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingBottom: 40,
  },
  buttonStyle: {
    shadowColor: 'grey',
    shadowOpacity: 0.9,
    shadowRadius: 1,
    position: 'absolute',
    top: 10,
    right: 80,
    //    padding: 10,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  textViewStyle1: {
    //    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    //    height: '100%',
    height: '140%',
    //    paddingVertical: 5,

    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
  },
  textViewStyle: {
    justifyContent: 'center',
    paddingVertical: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',

    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    //    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
});
