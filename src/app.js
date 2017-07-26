import React, { Component } from 'react';
import {FlatList, ScrollView, View, Button} from 'react-native';
import {range} from 'lodash';

import LockedScrollView from './LockedScrollView';

let nextItem = 100;

export default class LockedFlatList extends Component {
  state = {
    items: range(1, 20)
  }

  render() {
    return(
      <View>
        <Button onPress={() => {
          this.setState({items: [++nextItem, ...this.state.items]});
        }} title="Above"/>
        <Button onPress={() => {
          this.setState({items: [...this.state.items, ++nextItem]});
        }} title="Below"/>        
       
        <FlatList 
          data={this.state.items}           
          renderScrollComponent={props => <LockedScrollView {...props} />} 
          renderItem={({item}) => <View style={{margin: 10, height: 50, width: "80%", backgroundColor: numberToColor(item)}} /> } />

      </View>

    )
  }
}

const numberToColor = number => {

  if (number > 100)
    return "gold";

  switch (number % 3) {
    case 0: return "red"
    case 1: return "blue"
    case 2: return "green"
  }
}




/*
        <LockedScrollView {...this.props}>
          {this.state.items.map(item => <View key={item} style={{margin: 10, height: 50, width: "80%", backgroundColor: numberToColor(item)}} />)}
        </LockedScrollView>          */