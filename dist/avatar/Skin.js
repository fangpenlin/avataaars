import * as React from 'react';
import { Selector, SkinOption } from '../options';
function makeColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            return (React.createElement("g", { id: 'Skin/👶🏽-03-Brown', mask: `url(#${this.props.maskID})`, fill: color },
                React.createElement("g", { transform: 'translate(-32.000000, 0.000000)', id: 'Color' },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '244' }))));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
const Tanned = makeColor('Tanned', '#FD9841');
const Yellow = makeColor('Yellow', '#F8D25C');
const Pale = makeColor('Pale', '#FFDBB4');
const Light = makeColor('Light', '#EDB98A');
const Brown = makeColor('Brown', '#D08B5B');
const DarkBrown = makeColor('DarkBrown', '#AE5D29');
const Black = makeColor('Black', '#614335');
export default class Skin extends React.Component {
    render() {
        return (React.createElement(Selector, { option: SkinOption, defaultOption: Light },
            React.createElement(Tanned, { maskID: this.props.maskID }),
            React.createElement(Yellow, { maskID: this.props.maskID }),
            React.createElement(Pale, { maskID: this.props.maskID }),
            React.createElement(Light, { maskID: this.props.maskID }),
            React.createElement(Brown, { maskID: this.props.maskID }),
            React.createElement(DarkBrown, { maskID: this.props.maskID }),
            React.createElement(Black, { maskID: this.props.maskID })));
    }
}
