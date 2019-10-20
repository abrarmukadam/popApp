import {Alert} from 'react-native';

function PopUpSample(message) {
  setInterval(Alert.alert(message), 5000);
}

export default PopUpSample;
