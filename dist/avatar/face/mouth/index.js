import * as React from 'react';
import Concerned from './Concerned';
import Default from './Default';
import Disbelief from './Disbelief';
import Eating from './Eating';
import Grimace from './Grimace';
import Sad from './Sad';
import ScreamOpen from './ScreamOpen';
import Serious from './Serious';
import Smile from './Smile';
import Tongue from './Tongue';
import Twinkle from './Twinkle';
import Vomit from './Vomit';
import { MouthOption, Selector } from '../../../options';
export default class Mouth extends React.Component {
    render() {
        return (React.createElement(Selector, { defaultOption: Default, option: MouthOption },
            React.createElement(Concerned, null),
            React.createElement(Default, null),
            React.createElement(Disbelief, null),
            React.createElement(Eating, null),
            React.createElement(Grimace, null),
            React.createElement(Sad, null),
            React.createElement(ScreamOpen, null),
            React.createElement(Serious, null),
            React.createElement(Smile, null),
            React.createElement(Tongue, null),
            React.createElement(Twinkle, null),
            React.createElement(Vomit, null)));
    }
}
