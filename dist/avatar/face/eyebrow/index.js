import * as React from 'react';
import Angry from './Angry';
import AngryNatural from './AngryNatural';
import Default from './Default';
import DefaultNatural from './DefaultNatural';
import FlatNatural from './FlatNatural';
import RaisedExcited from './RaisedExcited';
import RaisedExcitedNatural from './RaisedExcitedNatural';
import SadConcerned from './SadConcerned';
import SadConcernedNatural from './SadConcernedNatural';
import UnibrowNatural from './UnibrowNatural';
import UpDown from './UpDown';
import UpDownNatural from './UpDownNatural';
import { EyebrowOption, Selector } from '../../../options';
export default class Eyebrow extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Default, option: EyebrowOption },
            React.createElement(Angry, null),
            React.createElement(AngryNatural, null),
            React.createElement(Default, null),
            React.createElement(DefaultNatural, null),
            React.createElement(FlatNatural, null),
            React.createElement(RaisedExcited, null),
            React.createElement(RaisedExcitedNatural, null),
            React.createElement(SadConcerned, null),
            React.createElement(SadConcernedNatural, null),
            React.createElement(UnibrowNatural, null),
            React.createElement(UpDown, null),
            React.createElement(UpDownNatural, null)));
    }
}
