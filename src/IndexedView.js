import React from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent, View} from 'react-native'

const nativeOnlyProps = {
  nativeOnly: {
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true,
  }
}

const IndexedView = React.createClass({
  propTypes: {
    ...View.propTypes,
    indexx: PropTypes.number,    
  },

  render: function() {
      return (
          <RCTIndexedView collapsable={false} {...this.props}/>
      )
  },
})

var RCTIndexedView = requireNativeComponent('RCTIndexedView', IndexedView, nativeOnlyProps)
export default IndexedView

