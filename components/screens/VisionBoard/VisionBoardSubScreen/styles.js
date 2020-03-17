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
  headerContainerStyle2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  Container2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  addButtonStyle: {justifyContent: 'flex-end', paddingLeft: 5},
  sendButtonStyle: {justifyContent: 'flex-end', paddingRight: 5},
  buttonContainer: {
    //    flex: 1,
    //    borderWidth: 2,
    paddingBottom: 4,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    //  borderColor: 'white',
    //   borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
    opacity: 0.8,

    // borderRadius: 20,
  },

  text: {
    margin: 10,
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
  },
  textInputStyle: {
    fontSize: 20,
    backgroundColor: 'grey',
    color: '#fffafa',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 10,
    marginHorizontal: 10,
    //    marginRight: 6,
  },
});
