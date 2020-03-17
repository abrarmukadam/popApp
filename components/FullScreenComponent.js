import React, {Component} from 'react';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {ScreenSwiper2, BackgroundImage} from './index';

class FullScreenComponent extends Component {
  state = {};

  render() {
    //    if (TestVisionBoardList)

    return (
      <View style={{flex: 1}}>
        {/* <Text>ANC</Text> */}
        {/* <View style={{flex: 1, borderWidth: 1}}> */}
        <BackgroundImage></BackgroundImage>

        {/* <FullScreenComponent
          visionItem={this.props.navigation.getParam('visionItem')}
          visionArrayList={this.props.visionArrayList}
          handleOnClickBack={this.handleOnClickBack}
          handleOnClickDelete={this.handleOnClickDelete}
        /> */}
      </View>
    );
  }
}
export default FullScreenComponent;

// class FullScreenComponent extends Component {
//   state = {};

//   render() {
//     // const visionItem = this.props.visionItem;

//     // const filteredVisionList = this.props.visionArrayList;

//     // const visionIndex = filteredVisionList
//     //   .map(List => {
//     //     return List.id;
//     //   })
//     //   .indexOf(visionItem.id);

//     //    this.setState({visionIndex, filteredVisionList});

//     return (
//       <View style={{flex: 1, borderWidth: 1}}>
//         {/* <BackgroundImage></BackgroundImage> */}
//         {/* <ScreenSwiper2
//           onClickDelete={this.props.handleOnClickDelete}
//           header={visionItem.visionBoard}
//           itemIndex={visionIndex}
//           list={filteredVisionList}
//           onClickBack={this.props.handleOnClickBack}
//           visionItem={filteredVisionList[visionIndex]}
//         /> */}
//       </View>
//       // <FullScreenSwiper
//       //   onClickDelete={this.handleOnClickDelete}
//       //   header={visionItem.visionBoard}
//       //   itemIndex={this.state.visionIndex}
//       //   list={this.state.filteredVisionList}
//       //   onClickBack={this.handleOnClickBack}
//       //   visionItem={visionItem}
//       // />
//     );
//   }
// }

// export default FullScreenComponent;
