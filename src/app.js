import React, { Component } from 'react';
import {FlatList, ScrollView, View, Button} from 'react-native';
import {range} from 'lodash';

import LockedScrollView from './LockedScrollView';

export default class LockedFlatList extends Component {
  state = {
    data: range(1, 50),
    newIndex: -1
  }

  render() {
    return(
      <View>
        <Button onPress={() => {
          this.setState({data: [-1, ...this.state.data], newIndex: 0});
        }} title="Above"/>
        <Button onPress={() => {
          this.setState({data: [...this.state.data, -1], newIndex: -1});
        }} title="Below"/>        
        <FlatList 
          data={this.state.data}           
          renderScrollComponent={props => <LockedScrollView shouldScroll={this.state.shouldScroll} {...props} newIndex={this.state.newIndex}/>} 
          renderItem={({item}) => <View style={{margin: 10, height: 50, width: "80%", backgroundColor: numberToColor(item)}} /> } />        
      </View>

    )
  }
}

const numberToColor = number => {

  if (number == -1)
    return "gold";

  switch (number % 3) {
    case 0: return "red"
    case 1: return "blue"
    case 2: return "green"
  }
}
