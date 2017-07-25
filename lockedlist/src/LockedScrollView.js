import React from 'react';
import {requireNativeComponent, ScrollView, View} from 'react-native'

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
    ...ScrollView.propTypes
  },

  render: function() {
      return (
        <RCTLockedScroll style={baseVertical}
          showsVerticalScrollIndicator={true}
          {...this.props} >
          <View collapsable={false}>
            {this.props.children}
          </View>
        </RCTLockedScroll>
      )
  },
})

var RCTLockedScroll = requireNativeComponent('RCTLockedScroll', LockableScrollView, nativeOnlyProps)
export default LockableScrollView