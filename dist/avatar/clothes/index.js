import * as React from 'react';
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';
import CollarSweater from './CollarSweater';
import GraphicShirt from './GraphicShirt';
import Hoodie from './Hoodie';
import Overall from './Overall';
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtScoopNeck from './ShirtScoopNeck';
import ShirtVNeck from './ShirtVNeck';
import { ClotheOption, Selector } from '../../options';
export default class Clothes extends React.Component {
    render() {
        return (React.createElement(Selector, { option: ClotheOption, defaultOption: BlazerShirt },
            React.createElement(BlazerShirt, null),
            React.createElement(BlazerSweater, null),
            React.createElement(CollarSweater, null),
            React.createElement(GraphicShirt, null),
            React.createElement(Hoodie, null),
            React.createElement(Overall, null),
            React.createElement(ShirtCrewNeck, null),
            React.createElement(ShirtScoopNeck, null),
            React.createElement(ShirtVNeck, null)));
    }
}
