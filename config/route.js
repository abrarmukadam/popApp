/*import {
  AffirmationListScreen,
  AffirmationEditScreen,
  ModalScreen,
} from '../components/index';
*/
import AffirmationListScreen from './../components/screens/AffirmationListScreen';
import AffirmationEditScreen from './../components/screens/AffirmationEditScreen';
import AddAffirmationScreen from './../components/screens/AddAffirmationScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// here create a route using react navigation
const MainStack = createStackNavigator(
  {
    Home: AffirmationListScreen,
    Details: AffirmationEditScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Add: {
      screen: AddAffirmationScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
