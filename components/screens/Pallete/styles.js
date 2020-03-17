import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderWidth: 1,
  },
  textContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 60,
    padding: 10,
    //    borderWidth: 1,

    backgroundColor: 'dodgerblue',
    //backgroundColor: '#432577',
    borderRadius: 10,
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
