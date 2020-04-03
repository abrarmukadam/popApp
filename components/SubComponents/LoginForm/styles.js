import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    //    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
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
  loginButtonText: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
    color: 'white',
  },
  loginButton: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#432577',
    margin: 8,
  },
  eyeButton: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  errorMessage: {
    color: 'red',
  },
  LogoutScreenContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
