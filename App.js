import React, {Component} from 'react';
import TabNavigator from './config/route';

import {ActivityIndicator, View, Text} from 'react-native';
import {YellowBox} from 'react-native';
import 'react-native-gesture-handler';

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage has been extracted from react-native core',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.',
  '`-[RCTRootView cancelTouches]`',
]);

import {store, persistor} from './config/redux-store';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export default class App extends Component {
  state = {
    isLoading: 'true',
  };

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: 'center',
    //         padding: 20,
    //       }}>
    //       <ActivityIndicator size="large" color="#0000ff" />
    //     </View>
    //   );
    // }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TabNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
