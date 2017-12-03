import * as React from 'react';
import Eyebrow from './eyebrow';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose/Default';
export default class Face extends React.Component {
    render() {
        return (React.createElement("g", { id: 'Face', transform: 'translate(76.000000, 82.000000)', fill: '#000000' },
            React.createElement(Mouth, null),
            React.createElement(Nose, null),
            React.createElement(Eyes, null),
            React.createElement(Eyebrow, null)));
    }
}
