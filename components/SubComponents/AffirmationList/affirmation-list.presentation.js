import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import {AffirmationCardDisplay} from './../AffirmationCard/index';

export default class AffirmationList extends Component {
  constructor(props) {
    super(props);
  }
  navigateToDetails = selectedCard => {
    this.props.editAffirmation(selectedCard);

    console.log('Navigate to Details for :', selectedCard);
  };
  // componentDidMount() {
  //   this.props.fetchAffirmations(this.props.affirmationList);
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.affirmationList != this.props.affirmationList)
  //     this.props.fetchAffirmations(this.props.affirmationList);
  // }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.AffList}>
            {this.props.filteredAffirmationList.map(item => {
              return (
                <AffirmationCardDisplay
                  key={item.id}
                  popItem={item}
                  onItemClicked={selectedCard =>
                    this.navigateToDetails(selectedCard)
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
