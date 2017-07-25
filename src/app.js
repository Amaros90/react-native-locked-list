import React, { Component } from 'react';
import {FlatList, ScrollView, View, Button} from 'react-native';
import {range} from 'lodash';

import LockedScrollView from './LockedScrollView';

export default class LockedFlatList extends Component {
  state = {
    data: range(1, 200),
    shouldScroll: false
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <View>
        <Button onPress={() => {
          this.setState({shouldScroll: true})          
          //setTimeout(() => this.setState({data: [100, ...this.state.data], shouldScroll: false}), 1000);
        }} title="Above"/>
        <Button onPress={() => {
          this.setState({shouldScroll: true})     
          //setTimeout(() => this.setState({data: [...this.state.data, 100], shouldScroll: false}), 1000);               
        }} title="Below"/>        
        <FlatList 
          data={this.state.data} 
          renderScrollComponent={props => <LockedScrollView shouldScroll={this.state.shouldScroll} {...props}/>} 
          renderItem={({item}) => <View style={{margin: 10, height: 50, width: "80%", backgroundColor: numberToColor(item)}} /> } />        
      </View>

    )
  }
}

const numberToColor = number => {
  switch (number % 3) {
    case 0: return "red"
    case 1: return "blue"
    case 2: return "green"
  }
}
