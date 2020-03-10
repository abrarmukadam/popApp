import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  eyeButton: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  errorMessageStyle: {
    color: 'red',
  },
  ButtonText: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
    color: 'white',
  },
  ButtonStyle: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#432577',
    borderWidth: 0.2,
    margin: 8,
  },
});
