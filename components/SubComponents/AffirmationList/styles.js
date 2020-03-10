import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  AffList: {
    margin: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
  safeAreaView: {
    flex: 1,

    //  margin: 10,
    //  marginTop: 10,
    //    marginBottom: 20,
  },
  Message: {
    fontSize: 15,
  },
  AddAff: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 60,
    shadowRadius: 10,
    shadowColor: 'blue',
  },
});
export default styles;
