import * as React from 'react';
import BeardLight from './BeardLight';
import BeardMagestic from './BeardMagestic';
import BeardMedium from './BeardMedium';
import Blank from './Blank';
import MoustacheFancy from './MoustacheFancy';
import MoustacheMagnum from './MoustacheMagnum';
import { FacialHairOption, Selector } from '../../../options';
export default class FacialHair extends React.Component {
    render() {
        return (React.createElement(Selector, { option: FacialHairOption, defaultOption: Blank },
            React.createElement(Blank, null),
            React.createElement(BeardMedium, null),
            React.createElement(BeardLight, null),
            React.createElement(BeardMagestic, null),
            React.createElement(MoustacheFancy, null),
            React.createElement(MoustacheMagnum, null)));
    }
}
