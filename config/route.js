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
  LoggedInScreen,
  ForgotPasswordScreen,
  RegisterScreen,
} from './../components/index';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconHeight = 30;
const AffirmationStack = createStackNavigator(
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
AffirmationStack.navigationOptions = ({navigation}) => {
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
    LoggedIn: {
      screen: LoggedInScreen,
    },

    Register: {
      screen: RegisterScreen,
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

LoginStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routes = navigation.state.routes;

  if (
    routes[routes.length - 1].routeName == 'Login' ||
    routes[routes.length - 1].routeName == 'Register' ||
    routes[routes.length - 1].routeName == 'ForgotPassword'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Affirmations: {
      screen: AffirmationStack,
      navigationOptions: {
        //      tabBarLabel: 'Home Page',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'file-document-edit' : 'file-document-edit-outline'}
            size={focused ? IconHeight : IconHeight}
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
            size={focused ? IconHeight : IconHeight}
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
            size={focused ? IconHeight : IconHeight}
            color={focused ? 'white' : 'white'}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Login',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',

      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        borderTopWidth: 0,
        //        marginVertical: 10,
        //        paddingTop: 10,
        opacity: 0.9,
        backgroundColor: '#121212',
        //        paddingTop: 1,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
