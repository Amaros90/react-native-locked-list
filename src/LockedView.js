import React from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent, View} from 'react-native'

const nativeOnlyProps = {
  nativeOnly: {
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true,
  }
}

const LockableView = React.createClass({
  propTypes: {
    ...View.propTypes,
  },

  render: function() {
      return (
          <RCTLockedView collapsable={false} {...this.props}/>
      )
  },
})

var RCTLockedView = requireNativeComponent('RCTLockedView', LockableView, nativeOnlyProps)
export default LockableView

