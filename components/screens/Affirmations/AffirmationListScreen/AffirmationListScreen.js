import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles.js';
import {SearchAffirmation, BackgroundImage} from './../../../index';
import ActionButton from 'react-native-action-button';

/* Import the component we are drafting here */
import AffirmationList from './../../../SubComponents/AffirmationList/index.js';

const TestAffirmationList = [
  {
    id: 1,
    popMessage: 'First realization of a warrior is Not knowing . . .',
    backColor: 'mediumpurple',
  },
  {
    id: 2,
    popMessage: 'Conscious of your choice & responsible for your action . . .',
    backColor: 'lightslategrey',
  },
  {
    id: 3,
    popMessage: 'Conscious of your choice & responsible for your action . . .',
    backColor: 'lightslategrey',
  },
  {
    id: 4,
    popMessage: 'Conscious of your choice & responsible for your action . . .',
    backColor: 'lightslategrey',
  },
  {
    id: 5,
    popMessage: 'Conscious of your choice & responsible for your action . . .',
    backColor: 'lightslategrey',
  },
  {
    id: 6,
    popMessage: 'First realization of a warrior is Not knowing . . .',
    backColor: 'mediumpurple',
  },
  {
    id: 7,
    popMessage: 'First realization of a warrior is Not knowing . . .',
    backColor: 'mediumpurple',
  },
  {
    id: 8,
    popMessage: 'First realization of a warrior is Not knowing . . .',
    backColor: 'mediumpurple',
  },
];

class AffirmationListScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchFilter: '',
    filteredList: this.props.affirmationList,
  };
  OnSearchChange = text => {
    this.setState({searchFilter: text});
    console.log('Search Filter: ', this.state.searchFilter);
  };

  onPressAdd = () => {
    this.props.navigation.navigate('AddAffirmationScreen');
  };
  onEditAffirmation = card => {
    this.props.navigation.navigate('EditAffirmationScreen', {
      selectedCard: card,
    });
  };
  componentDidMount() {
    console.log('FETCH AFFIRMATIONS CALLED WHEN LOGGED IN');
    this.props.fetchAffirmations(this.props.loggedInAffirmationList);
    this.props.fetchVisionBoards(
      this.props.loggedInVisionBoardList,
      this.props.loggedInVisionArrayList,
    );
    this.setState({
      filteredList: this.props.loggedInAffirmationList,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.affirmationList);
    let filteredList = [];
    if (prevState.searchFilter != this.state.searchFilter) {
      filteredList = this.props.affirmationList.filter(List => {
        return (
          List.popMessage
            .toLowerCase()
            .indexOf(this.state.searchFilter.toLowerCase()) !== -1
        );
      });
      this.setState({
        filteredList: filteredList,
      });
    }
    if (
      prevProps.loggedInAffirmationList != this.props.loggedInAffirmationList
    ) {
      console.log('FETCH UPDATED AFFIRMATION ON NEW LOGIN');
      this.props.fetchAffirmations(this.props.loggedInAffirmationList);
      this.props.fetchVisionBoards(
        this.props.loggedInVisionBoardList,
        this.props.loggedInVisionArrayList,
      );

      this.setState({
        filteredList: this.props.loggedInAffirmationList,
      });
    }
    if (prevProps.affirmationList != this.props.affirmationList) {
      console.log('UPDATE AFFIRMATION ON ADD or DELETE');
      this.setState({
        filteredList: this.props.affirmationList,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage />
        <SafeAreaView style={styles.safeAreaView}>
          <SearchAffirmation OnSearchChange={this.OnSearchChange} />
          <AffirmationList
            filteredAffirmationList={this.state.filteredList}
            editAffirmation={card => this.onEditAffirmation(card)}
          />
          <ActionButton
            buttonColor="#222222"
            onPress={() => this.onPressAdd()}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default AffirmationListScreen;
