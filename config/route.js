import React from 'react';
import {View, Image} from 'react-native';

import {
  AffirmationListScreen,
  AffirmationEditScreen,
  AddAffirmationScreen,
} from './../components/index';

import {
  VisionBoardHomeScreen,
  VisionBoardSubScreen,
  AddVisionScreen,
} from './../components/index';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

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
const VisionBoardStack = createStackNavigator(
  {
    VisionBoardHome: VisionBoardHomeScreen,
    VisionBoardSubScreen: VisionBoardSubScreen,
    AddVisionBoardScreen: AddVisionScreen,
  },
  {
    initialRouteName: 'VisionBoardHome',
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Affirmations: {
      screen: RootStack,
      navigationOptions: {
        //      tabBarLabel: 'Home Page',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={40} color="blue" />
        ),
      },
    },
    VisionBoard: {
      screen: VisionBoardStack,
      navigationOptions: {
        //      tabBarLabel: 'Home Page',
        tabBarIcon: ({tintColor}) => (
          <Icon name="archive" size={40} color="blue" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      labelStyle: {
        fontSize: 14,
      },
      style: {
        //        height: 30,
        borderTopWidth: 0,
        backgroundColor: 'lightgrey',
        tintColor: 'blue',
        //        borderTopRightRadius: 20,
        //       borderTopLeftRadius: 20,

        //      height: 55,
        paddingTop: 1,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
