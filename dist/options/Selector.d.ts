import * as PropTypes from 'prop-types';
import * as React from 'react';
import Option from './Option';
import OptionContext from './OptionContext';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
}
export default class Selector extends React.Component<Props> {
    static contextTypes: {
        optionContext: PropTypes.Requireable<OptionContext>;
    };
    private get optionContext();
    componentWillMount(): void;
    componentWillUpdate(nextProps: Props & {
        children?: React.ReactNode;
    }): void;
    componentWillUnmount(): void;
    render(): null;
    private optionContextUpdate;
    private updateOptionValues;
}
