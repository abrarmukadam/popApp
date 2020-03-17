import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {FullScreenComponent} from './../../../index';
import VisionFullScreenSwiper from './../../../SubComponents/VisionFullScreenSwiper/VisionFullScreenSwiper';
class visionBoardFullScreen extends Component {
  state = {
    visionItem: this.props.navigation.getParam('visionItem'),
    filteredVisionList: this.props.navigation.getParam('visionArrayList'),
  };
  handleOnClickBack = () => {
    this.props.navigation.navigate('VisionBoardSubScreen');
  };

  handleOnClickDelete = toDeleteVision => {
    const visionItem = this.props.navigation.getParam('visionItem');
    const visionBoardIndex = this.props.navigation.getParam('visionBoardIndex');

    console.log(visionItem);
    //filtering out the vision Boards

    const filteredVisionList = this.props.visionArrayList[visionBoardIndex];

    //locating the item to be deleted
    const deleteIndex = filteredVisionList[toDeleteVision.id - 1];

    //deleting the item from vision Board
    let tempArray = [
      ...this.props.visionArrayList[visionBoardIndex].filter(
        item => item.id !== toDeleteVision.id,
      ),
    ];

    console.log('TEMP-ARRAY', tempArray);

    //re-arranging the visionArray after deleting
    // const updatedVisionArray = [...this.props.screenProps.visionArray];
    tempArray.map(temp => {
      if (temp.id > toDeleteVision.id) temp.id = temp.id - 1;
    });

    let newIndex = filteredVisionList.length - toDeleteVision.id - 1;
    let newItem = newIndex
      ? filteredVisionList[toDeleteVision.id]
      : filteredVisionList[0];
    // let newItem = filteredVisionList[index]; // : filteredVisionList[0];
    //    this.props.navigation.navigate('VisionBoardSubScreen');
    //console.log(filteredVisionList);
    console.log('tempArray', tempArray);
    let newVisionArrayList = [...this.props.visionArrayList];
    newVisionArrayList[visionBoardIndex] = tempArray; //revise the list to be sent to server
    this.props.deleteVision(newVisionArrayList);

    this.handleOnClickBack();
    //if not the last item in the list then delete and navigate to next
    // if (filteredVisionList.length > 1) {
    //   this.props.navigation.navigate('VisionFullScreen', {
    //     visionItem: newItem,
    //     visionBoardIndex: visionBoardIndex,
    //     visionArrayList: tempArray,
    //   });
    // }
    //if last item in the list then delete the Vision Board as well
    // else {
    //   let filteredVisionBoardArray = this.props.screenProps.visionBoardArray.filter(
    //     List => {
    //       return List.visionBoard != visionItem.visionBoard;
    //     },
    //   );
    //   this.props.screenProps.updateVisionBoardArray(filteredVisionBoardArray);

    //   this.props.navigation.navigate('VisionBoardHome');
    // }
  };

  handleOnClickDelete2 = toDeleteVision => {
    console.log('totoDeleteVision:', toDeleteVision);

    const visionBoardIndex = this.props.navigation.getParam('visionBoardIndex');

    //    let tempList = [...this.props.visionArrayList[visionBoardIndex]];
    let templist2 = this.state.filteredVisionList.filter(
      item => item.id !== toDeleteVision.id,
    );
    templist2.map(temp => {
      if (temp.id > toDeleteVision.id) temp.id = temp.id - 1;
    });

    let newVisionArrayList = [...this.props.visionArrayList];
    newVisionArrayList[visionBoardIndex] = templist2; //revise the list to be sent to server

    let nextId = toDeleteVision.id - 1;
    if (this.state.filteredVisionList.length > 1) {
      //if last item being deleted

      if (!this.state.filteredVisionList[nextId]) {
        nextId = nextId - 1;
        if (this.state.filteredVisionList[nextId]) {
          nextId = 0;
        }
      }
      if (this.state.filteredVisionList.length == nextId + 1) {
        nextId = nextId - 1;
      }
    }
    this.setState({
      filteredVisionList: templist2,

      visionItem: this.state.filteredVisionList[nextId],
    });
    this.props.deleteVision(newVisionArrayList);
    if (!this.state.filteredVisionList.length) this.handleOnClickBack();
    else
      this.props.navigation.navigate('VisionFullScreen', {
        visionItem: this.state.visionItem,
        visionArrayList: templist2,
        visionBoardIndex: visionBoardIndex,
      });

    console.log('this.state.visionItem', this.state.visionItem);
    console.log('templist2', templist2);
  };

  componentDidMount() {}
  render() {
    return (
      <VisionFullScreenSwiper
        onClickDelete={this.handleOnClickDelete}
        //           header={visionItem.visionBoard}
        itemIndex={this.state.visionItem.id - 1}
        list={this.state.filteredVisionList}
        onClickBack={this.handleOnClickBack}
        visionItem={this.state.visionItem}
      />
    );
  }
}

export default visionBoardFullScreen;
