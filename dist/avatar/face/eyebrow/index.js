var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Eyebrow = /** @class */ (function (_super) {
    __extends(Eyebrow, _super);
    function Eyebrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyebrow.prototype.render = function () {
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
    };
    return Eyebrow;
}(React.Component));
export default Eyebrow;
