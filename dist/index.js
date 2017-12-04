import * as PropTypes from 'prop-types';
import * as React from 'react';
import Avatar from './avatar';
import { OptionContext, allOptions } from './options';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, OptionContext, allOptions } from './options';
export default class AvatarComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.optionContext = new OptionContext(allOptions);
    }
    getChildContext() {
        return { optionContext: this.optionContext };
    }
    componentWillMount() {
        this.updateOptionContext(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.updateOptionContext(nextProps);
    }
    render() {
        const { avatarStyle, style } = this.props;
        return React.createElement(Avatar, { avatarStyle: avatarStyle, style: style });
    }
    updateOptionContext(props) {
        const data = {};
        for (const option of allOptions) {
            const value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    }
}
AvatarComponent.childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
};
