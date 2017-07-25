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
    index: PropTypes.string,    
  },

  render: function() {
      return (
          <RCTIndexedView index={this.props.index} collapsable={false}/>
      )
  },
})

var RCTIndexedView = requireNativeComponent('RCTIndexedView', IndexedView, nativeOnlyProps)
export default IndexedView

