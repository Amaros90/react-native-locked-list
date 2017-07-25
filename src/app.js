import React, { Component } from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {range} from 'lodash';

import LockedScrollView from './LockedScrollView';

export default class LockedFlatList extends Component {
  state = {
    data: range(1, 200000)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: [100, ...this.state.data]})
    }, 5000)
    
  }

  render() {
    return(
      <FlatList 
        data={this.state.data} 
        renderScrollComponent={props => <LockedScrollView {...props}/>} 
        renderItem={({item}) => <View style={{margin: 10, height: 50, width: "80%", backgroundColor: numberToColor(item)}} /> } />
    )
  }
}

const numberToColor = number => {
  switch (number % 3) {
    case 0: return "red"
    case 1: return "blue"
    case 2: return "green"
    case 3: return "black"    
  }
}
