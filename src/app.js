import React, { Component } from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {range} from 'lodash';

import LockedScrollView from './LockedScrollView';

export default class LockedFlatList extends Component {
  state = {
    data: range(1, 20),
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({shouldScroll: true})
    // }, 5000)

    setTimeout(() => {
      console.warn("added above")
      this.setState({data: [100, ...this.state.data]})
    }, 3000)

    // setTimeout(() => {
    //   console.warn("added below")      
    //   this.setState({data: [...this.state.data, 100]})
    // }, 15000)    
    
  }

  render() {
    return(
      <FlatList 
        data={this.state.data} 
        renderScrollComponent={props => <LockedScrollView {...this.props}/>} 
        renderItem={({item}) => <View style={{margin: 10, height: 50, width: "80%", backgroundColor: numberToColor(item)}} /> } />
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
