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
import Blank from './Blank';
import Kurt from './Kurt';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';
import Sunglasses from './Sunglasses';
import Wayfarers from './Wayfarers';
import { AccessoriesOption, Selector } from '../../../options';
var Accessories = /** @class */ (function (_super) {
    __extends(Accessories, _super);
    function Accessories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accessories.prototype.render = function () {
        return (React.createElement(Selector, { defaultOption: Blank, option: AccessoriesOption },
            React.createElement(Blank, null),
            React.createElement(Kurt, null),
            React.createElement(Prescription01, null),
            React.createElement(Prescription02, null),
            React.createElement(Round, null),
            React.createElement(Sunglasses, null),
            React.createElement(Wayfarers, null)));
    };
    return Accessories;
}(React.Component));
export default Accessories;
