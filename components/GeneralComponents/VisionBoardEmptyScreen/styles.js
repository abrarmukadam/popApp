import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  textContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    fontSize: 22,
    color: 'cornsilk',
    fontStyle: 'italic',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    //    marginBottom: 20,
  },
  Heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingBottom: 40,
  },
  VisionList: {
    margin: 1,
    //    flexDirection: 'row',
    //  flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
});
