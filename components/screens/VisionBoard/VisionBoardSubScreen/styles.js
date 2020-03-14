import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: WIDTH,
  },
  safeAreaView: {
    borderColor: 'white',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    flex: 1,
    //    justifyContent: 'flex-start',
  },
  headerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    //   marginHorizontal: 10,
  },
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
  headingTextContainer: {flex: 5, alignItems: 'center'},
  VisionList: {
    margin: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
});
