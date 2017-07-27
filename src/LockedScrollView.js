import React from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent, ScrollView, View} from 'react-native'
import _ from 'lodash';
import IndexedView from './IndexedView';
import LockedView from './LockedView';

const nativeOnlyProps = {
  nativeOnly: {
    sendMomentumEvents: true
  }
}

const baseVertical = {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    overflow: 'scroll'
}

class LockableScrollView extends React.Component {
  state = {
    lastAddedIndex: null
  }

  componentWillReceiveProps(nextProps) {
    const newKey = _.first(_.difference(nextProps.children.map(c => c.key), this.props.children.map(c => c.key)));
    if (newKey === -1) return;
    const lastAddedIndex = _.findIndex(nextProps.children, c => c.key === newKey)
    this.setState({lastAddedIndex});
  }

  render() {
      return (
        <RCTLockedScroll 
          style={baseVertical}
          showsVerticalScrollIndicator={true}
          shouldScroll={true}
          {...this.props} >
          <View collapsable={false}>
              {this.props.children.map(child => 
                (<IndexedView indexx={child.props.test}>
                  {child} 
                </IndexedView>))
              }
          </View>
        </RCTLockedScroll>
      )    
  }

}

LockableScrollView.propTypes = {
    ...ScrollView.propTypes,
    enabled: PropTypes.bool,
    shouldScroll: PropTypes.bool  
}

var RCTLockedScroll = requireNativeComponent('RCTLockedScroll', LockableScrollView, nativeOnlyProps)
export default LockableScrollView