import * as React from 'react';
export default class EyeRoll extends React.Component {
    render() {
        return (React.createElement("g", { id: 'Eyes/Eye-Roll-🙄', transform: 'translate(0.000000, 8.000000)' },
            React.createElement("circle", { id: 'Eyeball', fill: '#FFFFFF', cx: '30', cy: '22', r: '14' }),
            React.createElement("circle", { id: 'The-white-stuff', fill: '#FFFFFF', cx: '82', cy: '22', r: '14' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '30', cy: '14', r: '6' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '82', cy: '14', r: '6' })));
    }
}
EyeRoll.optionValue = 'EyeRoll';
