import * as React from 'react';
import { uniqueId } from 'lodash';
export default class Grimace extends React.Component {
    constructor() {
        super(...arguments);
        this.path1 = uniqueId('react-path-');
        this.mask1 = uniqueId('react-mask-');
    }
    render() {
        const { path1, mask1 } = this;
        return (React.createElement("g", { id: 'Mouth/Grimace', transform: 'translate(2.000000, 52.000000)' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '24', y: '9', width: '60', height: '22', rx: '11' })),
            React.createElement("rect", { id: 'Mouth', fillOpacity: '0.599999964', fill: '#000000', fillRule: 'evenodd', x: '22', y: '7', width: '64', height: '26', rx: '13' }),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Mouth', fill: '#FFFFFF', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("path", { d: 'M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z', id: 'Grimace-Teeth', fill: '#E6E6E6', fillRule: 'evenodd', mask: `url(#${mask1})` })));
    }
}
Grimace.optionValue = 'Grimace';
