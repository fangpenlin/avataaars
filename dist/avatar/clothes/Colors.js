import * as React from 'react';
import { ClotheColorOption, Selector } from '../../options';
function makeColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            return (React.createElement("g", { id: 'Color/Palette/Gray-01', mask: `url(#${this.props.maskID})`, fillRule: 'evenodd', fill: color },
                React.createElement("rect", { id: '🖍Color', x: '0', y: '0', width: '264', height: '110' })));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
const Black = makeColor('Black', '#262E33');
const Blue01 = makeColor('Blue01', '#65C9FF');
const Blue02 = makeColor('Blue02', '#5199E4');
const Blue03 = makeColor('Blue03', '#25557C');
const Gray01 = makeColor('Gray01', '#E6E6E6');
const Gray02 = makeColor('Gray02', '#929598');
const Heather = makeColor('Heather', '#3C4F5C');
const PastelBlue = makeColor('PastelBlue', '#B1E2FF');
const PastelGreen = makeColor('PastelGreen', '#A7FFC4');
const PastelOrange = makeColor('PastelOrange', '#FFDEB5');
const PastelRed = makeColor('PastelRed', '#FFAFB9');
const PastelYellow = makeColor('PastelYellow', '#FFFFB1');
const Pink = makeColor('Pink', '#FF488E');
const Red = makeColor('Red', '#FF5C5C');
const White = makeColor('White', '#FFFFFF');
export default class Colors extends React.Component {
    render() {
        return (React.createElement(Selector, { option: ClotheColorOption, defaultOption: Gray01 },
            React.createElement(Black, { maskID: this.props.maskID }),
            React.createElement(Blue01, { maskID: this.props.maskID }),
            React.createElement(Blue02, { maskID: this.props.maskID }),
            React.createElement(Blue03, { maskID: this.props.maskID }),
            React.createElement(Gray01, { maskID: this.props.maskID }),
            React.createElement(Gray02, { maskID: this.props.maskID }),
            React.createElement(Heather, { maskID: this.props.maskID }),
            React.createElement(PastelBlue, { maskID: this.props.maskID }),
            React.createElement(PastelGreen, { maskID: this.props.maskID }),
            React.createElement(PastelOrange, { maskID: this.props.maskID }),
            React.createElement(PastelRed, { maskID: this.props.maskID }),
            React.createElement(PastelYellow, { maskID: this.props.maskID }),
            React.createElement(Pink, { maskID: this.props.maskID }),
            React.createElement(Red, { maskID: this.props.maskID }),
            React.createElement(White, { maskID: this.props.maskID })));
    }
}
