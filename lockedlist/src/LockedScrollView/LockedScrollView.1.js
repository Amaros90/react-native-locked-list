import React, {PropTypes} from 'react';
import {ScrollView} from 'react-native';
import cloneReferencedElement from 'react-clone-referenced-element';

let LockedScrollView = React.createClass({
    propTypes: {
        ...ScrollView.propTypes,
        renderScrollComponent: PropTypes.func.isRequired,
    },

    getDefaultProps(): DefaultProps {
        return {
            renderScrollComponent: props => <ScrollView {...props} />,
        };
    },

    getScrollResponder(): ReactComponent {
        return this._scrollComponent.getScrollResponder();
    },

    setNativeProps(props: Object) {
        this._scrollComponent.setNativeProps(props);
    },

    render() {
        var {
        renderScrollComponent,
        ...props,
        } = this.props;

        return cloneReferencedElement(renderScrollComponent(props), {
            ref: component => { this._scrollComponent = component; },
        });
  },
});

export default LockedScrollView;