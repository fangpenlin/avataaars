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
var eyebrow_1 = require("./eyebrow");
var eyes_1 = require("./eyes");
var mouth_1 = require("./mouth");
var Default_1 = require("./nose/Default");
var Face = /** @class */ (function (_super) {
    __extends(Face, _super);
    function Face() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Face.prototype.render = function () {
        return (React.createElement("g", { id: 'Face', transform: 'translate(76.000000, 82.000000)', fill: '#000000' },
            React.createElement(mouth_1.default, null),
            React.createElement(Default_1.default, null),
            React.createElement(eyes_1.default, null),
            React.createElement(eyebrow_1.default, null)));
    };
    return Face;
}(React.Component));
exports.default = Face;
