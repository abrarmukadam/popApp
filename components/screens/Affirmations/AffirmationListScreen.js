import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Image} from 'react-native';
import ActionButton from 'react-native-action-button';

import {
  AffirmationDisplay,
  SearchAffirmation,
  BackgroundImage,
} from './../../index';

export default class AffirmationListScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
  }
  state = {
    searchFilter: '',
    searchText: '',
  };

  OnAddAffirmation = text => {
    let addItem = {
      id: this.props.screenProps.popArray.length + 1,
      popMessage: text,
      backColor: '#ffebcd',
    };
    this.props.screenProps.updatePopArray([
      ...this.props.screenProps.popArray,
      addItem,
    ]);
  };

  navigateToDetails = popItem => {
    this.props.navigation.navigate('Details', {
      popItem: popItem,
      //      popMessage: popItem.popMessage,
      popMessage: this.props.screenProps.popArray[popItem.id - 1].popMessage,
      backColor: popItem.backColor,
      id: popItem.id,
    });
  };
  OnSearchChange = text => {
    this.setState({searchText: text});
    this.setState({
      searchFilter: text,
    });
  };
  onPressAdd = () => {
    this.props.navigation.navigate('Add');
  };
  render() {
    let filteredList = this.props.screenProps.popArray.filter(List => {
      return (
        List.popMessage
          .toLowerCase()
          .indexOf(this.state.searchFilter.toLowerCase()) !== -1
      );
    });

    return (
      <View style={{flex: 1}}>
        <BackgroundImage />

        <SafeAreaView style={styles.safeAreaView}>
          <SearchAffirmation
            OnSearchChange={this.OnSearchChange}></SearchAffirmation>
          <ScrollView>
            <View style={styles.AffList}>
              {filteredList.map(item => {
                return (
                  <AffirmationDisplay
                    key={item.id}
                    popItem={item}
                    onItemClicked={this.navigateToDetails}
                  />
                );
              })}
            </View>
          </ScrollView>
          <ActionButton
            buttonColor="#222222"
            onPress={this.onPressAdd}></ActionButton>
        </SafeAreaView>
      </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
  safeAreaView: {
    flex: 1,

    //  margin: 10,
    //  marginTop: 10,
    //    marginBottom: 20,
  },
  Message: {
    fontSize: 15,
  },
  AddAff: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 60,
    shadowRadius: 10,
    shadowColor: 'blue',
  },
});
