"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BlazerShirt_1 = require("./BlazerShirt");
var BlazerSweater_1 = require("./BlazerSweater");
var CollarSweater_1 = require("./CollarSweater");
var GraphicShirt_1 = require("./GraphicShirt");
var Hoodie_1 = require("./Hoodie");
var Overall_1 = require("./Overall");
var ShirtCrewNeck_1 = require("./ShirtCrewNeck");
var ShirtScoopNeck_1 = require("./ShirtScoopNeck");
var ShirtVNeck_1 = require("./ShirtVNeck");
var options_1 = require("../../options");
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    function Clothes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clothes.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.ClotheOption, defaultOption: BlazerShirt_1.default },
            React.createElement(BlazerShirt_1.default, null),
            React.createElement(BlazerSweater_1.default, null),
            React.createElement(CollarSweater_1.default, null),
            React.createElement(GraphicShirt_1.default, null),
            React.createElement(Hoodie_1.default, null),
            React.createElement(Overall_1.default, null),
            React.createElement(ShirtCrewNeck_1.default, null),
            React.createElement(ShirtScoopNeck_1.default, null),
            React.createElement(ShirtVNeck_1.default, null)));
    };
    return Clothes;
}(React.Component));
exports.default = Clothes;
