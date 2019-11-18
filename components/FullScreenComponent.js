import React, {Component} from 'react';
import {ScreenSwiper2} from './index';

class FullScreenComponent extends Component {
  state = {};

  render() {
    const visionItem = this.props.visionItem;

    const filteredVisionList = this.props.visionArray.filter(List => {
      return List.visionBoard.indexOf(visionItem.visionBoard) !== -1;
    });

    const visionIndex = filteredVisionList
      .map(List => {
        return List.id;
      })
      .indexOf(visionItem.id);

    //    this.setState({visionIndex, filteredVisionList});

    return (
      <ScreenSwiper2
        onClickDelete={this.props.handleOnClickDelete}
        header={visionItem.visionBoard}
        itemIndex={visionIndex}
        list={filteredVisionList}
        onClickBack={this.props.handleOnClickBack}
        visionItem={filteredVisionList[visionIndex]}
      />
      // <FullScreenSwiper
      //   onClickDelete={this.handleOnClickDelete}
      //   header={visionItem.visionBoard}
      //   itemIndex={this.state.visionIndex}
      //   list={this.state.filteredVisionList}
      //   onClickBack={this.handleOnClickBack}
      //   visionItem={visionItem}
      // />
    );
  }
}

export default FullScreenComponent;
