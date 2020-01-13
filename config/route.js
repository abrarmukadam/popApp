import React from 'react';

import {
  AffirmationListScreen,
  AffirmationFullScreen,
  AffirmationEditScreen,
  AddAffirmationScreen,
} from './../components/index';

import {
  VisionBoardHomeScreen,
  VisionBoardSubScreen,
  AddVisionScreen,
  VisionFullScreen,
} from './../components/index';

import {
  LoginScreen,
  ForgotPasswordScreen,
  RegisterScreen,
} from './../components/index';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RootStack = createStackNavigator(
  {
    Home: {screen: AffirmationListScreen},
    Details: {screen: AffirmationFullScreen},
    Edit: {
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

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },

    Register: {
      screen: RegisterScreen,
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Affirmations: {
      screen: RootStack,
      navigationOptions: {
        //      tabBarLabel: 'Home Page',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'file-document-edit' : 'file-document-edit-outline'}
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
            name={focused ? 'cards' : 'cards-outline'}
            size={focused ? 40 : 40}
            color="white"
          />
        ),
      },
    },
    Login: {
      screen: LoginStack,
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
