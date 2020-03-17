import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles.js';
import {SearchAffirmation, BackgroundImage} from './../../../index';
import ActionButton from 'react-native-action-button';

/* Import the component we are drafting here */
import AffirmationList from './../../../SubComponents/AffirmationList/index.js';

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
    if (this.props.loggedInStatus) {
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevProps.affirmationList != this.props.affirmationList ||
        prevProps.visionBoardList != this.props.visionBoardList ||
        prevProps.visionArrayList != this.props.visionArrayList) &&
      prevProps.userLoggedIn == this.props.userLoggedIn
    ) {
      this.props.dataToServer(
        this.props.userLoggedIn,
        this.props.affirmationList,
        this.props.visionBoardList,
        this.props.visionArrayList,
      );
    }
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
    if (prevProps.userLoggedIn != this.props.userLoggedIn) {
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
