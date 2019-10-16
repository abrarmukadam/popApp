/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import AffirmationDisplay from './components/AffirmationDisplay';
import AddAffirmation from './components/AddAffirmation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    popArray: [
      {
        id: 1,
        popMessage: 'Awesome Awesome Awesome ! ! !',
      },
      {
        id: 2,
        popMessage: 'Let it flow and let it Go ! ',
      },
      {
        id: 3,
        popMessage: 'Upset the Establised Order... ',
      },
    ],
  };
  OnAddAffirmation = text => {
    console.log(text);
    let addItem = {
      id: this.state.popArray.length + 1,
      popMessage: text,
    };
    console.log(addItem.id);

    this.setState({popArray: [...this.state.popArray, addItem]});
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.AffList}>
            {this.state.popArray.map(item => {
              return (
                <AffirmationDisplay
                  key={item.id}
                  id={item.id}
                  itemId={item.id}
                  popMessage={item.popMessage}></AffirmationDisplay>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.AddAff}>
          <AddAffirmation
            OnAddAffirmation={this.OnAddAffirmation}></AddAffirmation>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  AffList: {
    margin: 1,
  },
  safeAreaView: {
    flex: 1,
    margin: 10,
    marginTop: 10,
  },
  Message: {
    fontSize: 15,
  },
  AddAff: {
    justifyContent: 'flex-end',
  },
});

/*
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/
