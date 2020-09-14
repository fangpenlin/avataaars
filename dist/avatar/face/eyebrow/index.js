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
var Angry_1 = require("./Angry");
var AngryNatural_1 = require("./AngryNatural");
var Default_1 = require("./Default");
var DefaultNatural_1 = require("./DefaultNatural");
var FlatNatural_1 = require("./FlatNatural");
var RaisedExcited_1 = require("./RaisedExcited");
var RaisedExcitedNatural_1 = require("./RaisedExcitedNatural");
var SadConcerned_1 = require("./SadConcerned");
var SadConcernedNatural_1 = require("./SadConcernedNatural");
var UnibrowNatural_1 = require("./UnibrowNatural");
var UpDown_1 = require("./UpDown");
var UpDownNatural_1 = require("./UpDownNatural");
var options_1 = require("../../../options");
var Eyebrow = /** @class */ (function (_super) {
    __extends(Eyebrow, _super);
    function Eyebrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyebrow.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Default_1.default, option: options_1.EyebrowOption },
            React.createElement(Angry_1.default, null),
            React.createElement(AngryNatural_1.default, null),
            React.createElement(Default_1.default, null),
            React.createElement(DefaultNatural_1.default, null),
            React.createElement(FlatNatural_1.default, null),
            React.createElement(RaisedExcited_1.default, null),
            React.createElement(RaisedExcitedNatural_1.default, null),
            React.createElement(SadConcerned_1.default, null),
            React.createElement(SadConcernedNatural_1.default, null),
            React.createElement(UnibrowNatural_1.default, null),
            React.createElement(UpDown_1.default, null),
            React.createElement(UpDownNatural_1.default, null)));
    };
    return Eyebrow;
}(React.Component));
exports.default = Eyebrow;
