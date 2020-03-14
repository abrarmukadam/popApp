import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: WIDTH,
    //    marginBottom: 20,
  },
  Heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  VisionList: {
    margin: 1,
    //    flexDirection: 'row',
    //  flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
});
