import * as PropTypes from 'prop-types';
import * as React from 'react';
import OptionContext from './OptionContext';
function getComponentOptionValue(component) {
    const optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error(`optionValue should be provided for ${component}`);
    }
    return optionValue;
}
export default class Selector extends React.Component {
    constructor() {
        super(...arguments);
        this.optionContextUpdate = () => {
            this.forceUpdate();
        };
    }
    get optionContext() {
        return this.context.optionContext;
    }
    componentWillMount() {
        const { option, defaultOption } = this.props;
        const { optionContext } = this;
        const defaultValue = getComponentOptionValue(defaultOption);
        optionContext.addStateChangeListener(this.optionContextUpdate);
        optionContext.optionEnter(option.key);
        const optionState = optionContext.getOptionState(option.key);
        this.updateOptionValues();
        if (optionState) {
            optionContext.setDefaultValue(option.key, defaultValue);
        }
    }
    componentWillUpdate(nextProps) {
        this.updateOptionValues(nextProps);
    }
    componentWillUnmount() {
        this.optionContext.removeStateChangeListener(this.optionContextUpdate);
        this.optionContext.optionExit(this.props.option.key);
    }
    render() {
        let result = null;
        const { option, children } = this.props;
        const value = this.optionContext.getValue(option.key);
        React.Children.forEach(children, child => {
            if (getComponentOptionValue(child.type) === value) {
                result = child;
            }
        });
        return result;
    }
    updateOptionValues(nextProps) {
        if (nextProps && this.props.children === nextProps.children) {
            return;
        }
        const { option, children } = this.props;
        const values = React.Children.map(children, 
        // TODO: also validate and throw error if we don't see optionValue
            child => getComponentOptionValue(child.type));
        if (new Set(values).size !== values.length) {
            throw new Error('Duplicate values');
        }
        this.optionContext.setOptions(option.key, values);
    }
}
Selector.contextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
};
