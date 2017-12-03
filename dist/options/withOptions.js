import * as PropTypes from 'prop-types';
import * as React from 'react';
import OptionContext from './OptionContext';
export default function withOptions(Component, config) {
    return _a = class ComponentWithOptions extends React.Component {
            get optionContext() {
                return this.context.optionContext;
            }
            componentDidMount() {
                //
            }
            componentWillUnmount() {
                //
            }
            render() {
                const { props } = this;
                return React.createElement(Component, Object.assign({}, props));
            }
        },
        _a.contextTypes = {
            optionContext: PropTypes.instanceOf(OptionContext)
        },
        _a;
    var _a;
}
