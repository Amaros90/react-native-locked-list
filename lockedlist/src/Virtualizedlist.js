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

export default class Lockedlist extends Component {

  render() {
    var data = [1,2,3,4,5,6,7,8,9,10];

    return(
      <VirtualizedList data={data} renderScrollComponent={props => <ScrollView {...props}/>}  getItemCount={() => data.length} getItem={(data, index) => data[index]}  
                       renderItem={(item) => <View style={{margin: 10, height: 50, width: 50, backgroundColor: 'red'}} /> } />
    )
  }
}