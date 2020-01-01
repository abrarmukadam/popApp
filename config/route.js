import React from 'react';

import {
  AffirmationListScreen,
  //  AffirmationFullScreen,
  AffirmationEditScreen,
  AddAffirmationScreen,
} from './../components/index';

import {
  VisionBoardHomeScreen,
  VisionBoardSubScreen,
  AddVisionScreen,
  VisionFullScreen,
} from './../components/index';

import {LoginScreen} from './../components/index';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RootStack = createStackNavigator(
  {
    Home: {screen: AffirmationListScreen},
    //    FullScreen: {screen: AffirmationFullScreen},
    Details: {
      screen: AffirmationEditScreen,
    },
    Add: {
      screen: AddAffirmationScreen,
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  },
);
RootStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const VisionBoardStack = createStackNavigator(
  {
    VisionBoardHome: {
      screen: VisionBoardHomeScreen,
    },

    VisionBoardSubScreen: {
      screen: VisionBoardSubScreen,
    },
    AddVisionBoardScreen: AddVisionScreen,
    VisionFullScreen: VisionFullScreen,
  },
  {
    initialRouteName: 'VisionBoardHome',
    headerMode: 'none',
  },
);

VisionBoardStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Affirmations: {
      screen: RootStack,
      navigationOptions: {
        //      tabBarLabel: 'Home Page',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'home' : 'home-outline'}
            size={focused ? 40 : 40}
            color="white"
          />
        ),
      },
    },
    VisionBoard: {
      screen: VisionBoardStack,
      navigationOptions: {
        tabBarLabel: 'Dream Board',
        color: 'white',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'card-bulleted' : 'card-bulleted-outline'}
            size={focused ? 40 : 40}
            color="white"
          />
        ),
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        color: 'white',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'account' : 'account-outline'}
            size={focused ? 40 : 40}
            color="white"
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'blue',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        borderTopWidth: 0,
        backgroundColor: 'darkcyan',
        //        paddingTop: 1,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
