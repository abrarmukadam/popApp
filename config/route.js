import React from 'react';
import {Text, View} from 'react-native';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

import AffirmationListScreen from './../components/screens/AffirmationListScreen';
import AffirmationEditScreen from './../components/screens/AffirmationEditScreen';
import AddAffirmationScreen from './../components/screens/AddAffirmationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import VisionBoardHomeScreen from './../components/screens/VisionBoard/VisionBoardHomeScreen';
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// here create a route using react navigation

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
/*
const TabNavigator = createBottomTabNavigator({
  Home: MainStack,
  Settings: SettingsScreen,
});
*/
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

const TabNavigator = createBottomTabNavigator({
  Affirmations: {
    screen: RootStack,
    navigationOptions: {
      //      tabBarLabel: 'Home Page',
      tabBarIcon: ({tintColor}) => <Icon name="home" size={40} color="blue" />,
    },
  },
  VisionBoard: {
    screen: VisionBoardHomeScreen,
    navigationOptions: {
      //      tabBarLabel: 'Home Page',
      tabBarIcon: ({tintColor}) => (
        <Icon name="archive" size={40} color="blue" />
      ),
    },
  },
});

export default createAppContainer(RootStack);
