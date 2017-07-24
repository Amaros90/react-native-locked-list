/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  VirtualizedList,
  FlatList,
  View
} from 'react-native';

export default class lockedlist extends Component {


  render() {
    var data = [1,2,3,4,5,6,7,8,9,10];
    /* data.push({name: 'Daniel'})
    data.push({name: 'DanielA'})
    data.push({name: 'DanielB'}) */

    return(
      <VirtualizedList data={data}  getItemCount={() => data.length} getItem={(data, index) => data[index]}  
                       renderItem={(item) => <View style={{margin: 10, height: 50, width: 50, backgroundColor: 'red'}} /> } />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('lockedlist', () => lockedlist);
