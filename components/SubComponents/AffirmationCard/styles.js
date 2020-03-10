import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Layout: {
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    //  width: 160,
    width: '45%',
    height: 120,
    //    borderWidth: 0.3,
    borderRadius: 15, //Then Make the Border Radius twice the size of width or Height

    flexDirection: 'row',
  },
  AffText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
    margin: 4,
  },
});

export default styles;
