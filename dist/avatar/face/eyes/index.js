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
import Close from './Close';
import Cry from './Cry';
import Default from './Default';
import Dizzy from './Dizzy';
import EyeRoll from './EyeRoll';
import Happy from './Happy';
import Hearts from './Hearts';
import Side from './Side';
import Squint from './Squint';
import Surprised from './Surprised';
import Wink from './Wink';
import WinkWacky from './WinkWacky';
import { EyesOption, Selector } from '../../../options';
var Eyes = /** @class */ (function (_super) {
    __extends(Eyes, _super);
    function Eyes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyes.prototype.render = function () {
        return (React.createElement(Selector, { defaultOption: Default, option: EyesOption },
            React.createElement(Close, null),
            React.createElement(Cry, null),
            React.createElement(Default, null),
            React.createElement(Dizzy, null),
            React.createElement(EyeRoll, null),
            React.createElement(Happy, null),
            React.createElement(Hearts, null),
            React.createElement(Side, null),
            React.createElement(Squint, null),
            React.createElement(Surprised, null),
            React.createElement(Wink, null),
            React.createElement(WinkWacky, null)));
    };
    return Eyes;
}(React.Component));
export default Eyes;
