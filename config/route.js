import React from 'react';

import {
  AddAffirmationScreen,
  AffirmationFullScreen,
  //  EditAffirmationScreen,
} from './../components/index';

import {
  VisionBoardHomeScreen,
  VisionBoardSubScreen,
  AddVisionScreen,
  VisionFullScreen,
} from './../components/index';

import {
  LoggedInScreen,
  ForgotPasswordScreen,
  RegisterScreen,
} from './../components/index';

import {default as LoginScreen} from './../components/SubComponents/LoginControl/login-control.container';
import {default as AffirmationListScreen} from './../components/SubComponents/AffirmationControl/affirmation-control.container';
import {default as EditAffirmationScreen} from './../components/screens/Affirmations/EditAffirmationScreen/EditAffirmationScreen.container';

import PalleteScreen from './../components/screens/Pallete/pallete.presentation';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconHeight = 30;
const AffirmationStack = createStackNavigator(
  {
    Home: {screen: AffirmationListScreen},
    EditAffirmationScreen: {screen: EditAffirmationScreen},
    AddAffirmationScreen: {
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

  let check = navigation.state.routes[0].params
    ? navigation.state.routes[0].params.tabHide
    : 'true';

  if (
    routes[routes.length - 1].routeName == 'Login' ||
    routes[routes.length - 1].routeName == 'Register' ||
    routes[routes.length - 1].routeName == 'ForgotPassword'
  ) {
    tabBarVisible = false;
    if (check == 'false') tabBarVisible = true;
  }

  //  if(navigation.state.routes[0].params)
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
    Pallete: {
      screen: PalleteScreen,
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
    initialRouteName: 'Pallete',
    //initialRouteName: 'Login',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',
      tabBarVisible: 'true',
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
