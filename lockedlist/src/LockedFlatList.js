import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  VirtualizedList,
  FlatList,
  ScrollView,
  View
} from 'react-native';

import LockedScrollView from './LockedScrollView/LockedScrollView';

export default class LockedFlatList extends Component {

  render() {
    var data = [1,2,3,4,5,6,7,8,9,10];

    return(
      <FlatList data={data} renderScrollComponent={props => <LockedScrollView {...props}/>} renderItem={(item) => <View style={{margin: 10, height: 50, width: 50, backgroundColor: 'red'}} /> } />
    )
  }
}
