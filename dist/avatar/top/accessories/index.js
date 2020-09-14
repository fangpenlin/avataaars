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
var Blank_1 = require("./Blank");
var Kurt_1 = require("./Kurt");
var Prescription01_1 = require("./Prescription01");
var Prescription02_1 = require("./Prescription02");
var Round_1 = require("./Round");
var Sunglasses_1 = require("./Sunglasses");
var Wayfarers_1 = require("./Wayfarers");
var options_1 = require("../../../options");
var Accessories = /** @class */ (function (_super) {
    __extends(Accessories, _super);
    function Accessories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accessories.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Blank_1.default, option: options_1.AccessoriesOption },
            React.createElement(Blank_1.default, null),
            React.createElement(Kurt_1.default, null),
            React.createElement(Prescription01_1.default, null),
            React.createElement(Prescription02_1.default, null),
            React.createElement(Round_1.default, null),
            React.createElement(Sunglasses_1.default, null),
            React.createElement(Wayfarers_1.default, null)));
    };
    return Accessories;
}(React.Component));
exports.default = Accessories;
