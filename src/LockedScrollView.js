import React from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent, ScrollView, View} from 'react-native'
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

const LockableScrollView = React.createClass({
  propTypes: {
    ...ScrollView.propTypes,
    isLocked: PropTypes.bool,
    shouldScroll: PropTypes.bool
  },
  
  render: function() {
      return (
        <RCTLockedScroll style={baseVertical}
          showsVerticalScrollIndicator={true}
          {...this.props} >
          <LockedView collapsable={false}>
            {this.props.children.map((child, i) => {
              return (
                <IndexedView indexx={this.props.newIndex}>
                  {child}
                </IndexedView>
              )
            })}
          </LockedView>
        </RCTLockedScroll>
      )
  },
})

var RCTLockedScroll = requireNativeComponent('RCTLockedScroll', LockableScrollView, nativeOnlyProps)
export default LockableScrollView