import * as React from 'react';
import Close from './Close';
import Cry from './Cry';
import Default from './Default';
import Dizzy from './Dizzy';
import EyeRoll from './EyeRoll';
import Happy from './Happy';
import Hearts from './Hearts';
import Side from './Side';
import Squint from './Squint';
import Surprised from './Surprised';
import Wink from './Wink';
import WinkWacky from './WinkWacky';
import { EyesOption, Selector } from '../../../options';
export default class Eyes extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Default, option: EyesOption },
            React.createElement(Close, null),
            React.createElement(Cry, null),
            React.createElement(Default, null),
            React.createElement(Dizzy, null),
            React.createElement(EyeRoll, null),
            React.createElement(Happy, null),
            React.createElement(Hearts, null),
            React.createElement(Side, null),
            React.createElement(Squint, null),
            React.createElement(Surprised, null),
            React.createElement(Wink, null),
            React.createElement(WinkWacky, null)));
    }
}
