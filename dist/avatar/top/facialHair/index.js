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
import BeardLight from './BeardLight';
import BeardMagestic from './BeardMagestic';
import BeardMedium from './BeardMedium';
import Blank from './Blank';
import MoustacheFancy from './MoustacheFancy';
import MoustacheMagnum from './MoustacheMagnum';
import { FacialHairOption, Selector } from '../../../options';
var FacialHair = /** @class */ (function (_super) {
    __extends(FacialHair, _super);
    function FacialHair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacialHair.prototype.render = function () {
        return (React.createElement(Selector, { option: FacialHairOption, defaultOption: Blank },
            React.createElement(Blank, null),
            React.createElement(BeardMedium, null),
            React.createElement(BeardLight, null),
            React.createElement(BeardMagestic, null),
            React.createElement(MoustacheFancy, null),
            React.createElement(MoustacheMagnum, null)));
    };
    return FacialHair;
}(React.Component));
export default FacialHair;
