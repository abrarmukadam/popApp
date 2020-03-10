import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';

import {SearchAffirmation, BackgroundImage} from './../../index';

import {AffirmationCard} from '../../SubComponents/AffirmationCard/index';
import styles from './styles';

export default class AffirmationList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('AffirmationList Component Mounted');
    //If this.props.affirmations is empty, fetch it
    //  if (this.props.affirmationList.length == 0) {
    this.props.fetchAffirmations();
    //  }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.addAffirmation()}>
        {this.props.affirmationList.map(item => {
          return (
            <View>
              <AffirmationCard
                key={item.id}
                popItem={item}
                //                onItemClicked={this.navigateToDetails}
              />
            </View>
          );
        })}
        <Text>AFFIRMATION LIST</Text>
      </TouchableOpacity>
    );
  }
}
