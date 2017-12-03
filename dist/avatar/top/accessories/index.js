import * as React from 'react';
import Blank from './Blank';
import Kurt from './Kurt';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';
import Sunglasses from './Sunglasses';
import Wayfarers from './Wayfarers';
import { AccessoriesOption, Selector } from '../../../options';
export default class Accessories extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Blank, option: AccessoriesOption },
            React.createElement(Blank, null),
            React.createElement(Kurt, null),
            React.createElement(Prescription01, null),
            React.createElement(Prescription02, null),
            React.createElement(Round, null),
            React.createElement(Sunglasses, null),
            React.createElement(Wayfarers, null)));
    }
}
