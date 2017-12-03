import * as React from 'react';
import { FacialHairColor, Selector } from '../../../options';
function makeColor(name, color) {
    class ColorComponent extends React.Component {
        render() {
            return (React.createElement("g", { id: 'Color/Hair/Brown', mask: `url(#${this.props.maskID})`, fill: color },
                React.createElement("g", { transform: 'translate(-32.000000, 0.000000)', id: 'Color' },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '244' }))));
        }
    }
    const anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
const Auburn = makeColor('Auburn', '#A55728');
const Black = makeColor('Black', '#2C1B18');
const Blonde = makeColor('Blonde', '#B58143');
const BlondeGolden = makeColor('BlondeGolden', '#D6B370');
const Brown = makeColor('Brown', '#724133');
const BrownDark = makeColor('BrownDark', '#4A312C');
const Platinum = makeColor('Platinum', '#ECDCBF');
const Red = makeColor('Red', '#C93305');
export default class Colors extends React.Component {
    render() {
        return (React.createElement(Selector, { option: FacialHairColor, defaultOption: BrownDark },
            React.createElement(Auburn, { maskID: this.props.maskID }),
            React.createElement(Black, { maskID: this.props.maskID }),
            React.createElement(Blonde, { maskID: this.props.maskID }),
            React.createElement(BlondeGolden, { maskID: this.props.maskID }),
            React.createElement(Brown, { maskID: this.props.maskID }),
            React.createElement(BrownDark, { maskID: this.props.maskID }),
            React.createElement(Platinum, { maskID: this.props.maskID }),
            React.createElement(Red, { maskID: this.props.maskID })));
    }
}
