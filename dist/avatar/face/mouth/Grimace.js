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
var lodash_1 = require("lodash");
var Grimace = /** @class */ (function (_super) {
    __extends(Grimace, _super);
    function Grimace() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    Grimace.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Mouth/Grimace', transform: 'translate(2.000000, 52.000000)' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '24', y: '9', width: '60', height: '22', rx: '11' })),
            React.createElement("rect", { id: 'Mouth', fillOpacity: '0.599999964', fill: '#000000', fillRule: 'evenodd', x: '22', y: '7', width: '64', height: '26', rx: '13' }),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Mouth', fill: '#FFFFFF', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("path", { d: 'M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z', id: 'Grimace-Teeth', fill: '#E6E6E6', fillRule: 'evenodd', mask: "url(#" + mask1 + ")" })));
    };
    Grimace.optionValue = 'Grimace';
    return Grimace;
}(React.Component));
exports.default = Grimace;
