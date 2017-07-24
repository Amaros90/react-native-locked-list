import React, { Component } from 'react';
import Virtualizedlist from './Virtualizedlist';
import LockedFlatList from './LockedFlatList';

export default class LockedList extends Component {
  render() {
    return (
      <LockedFlatList />
    );
  }
}