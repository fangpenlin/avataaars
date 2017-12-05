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
import Concerned from './Concerned';
import Default from './Default';
import Disbelief from './Disbelief';
import Eating from './Eating';
import Grimace from './Grimace';
import Sad from './Sad';
import ScreamOpen from './ScreamOpen';
import Serious from './Serious';
import Smile from './Smile';
import Tongue from './Tongue';
import Twinkle from './Twinkle';
import Vomit from './Vomit';
import { MouthOption, Selector } from '../../../options';
var Mouth = /** @class */ (function (_super) {
    __extends(Mouth, _super);
    function Mouth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouth.prototype.render = function () {
        return (React.createElement(Selector, { defaultOption: Default, option: MouthOption },
            React.createElement(Concerned, null),
            React.createElement(Default, null),
            React.createElement(Disbelief, null),
            React.createElement(Eating, null),
            React.createElement(Grimace, null),
            React.createElement(Sad, null),
            React.createElement(ScreamOpen, null),
            React.createElement(Serious, null),
            React.createElement(Smile, null),
            React.createElement(Tongue, null),
            React.createElement(Twinkle, null),
            React.createElement(Vomit, null)));
    };
    return Mouth;
}(React.Component));
export default Mouth;
