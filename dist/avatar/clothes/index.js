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
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    function Clothes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clothes.prototype.render = function () {
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
    };
    return Clothes;
}(React.Component));
export default Clothes;
