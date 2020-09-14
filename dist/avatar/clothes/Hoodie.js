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
var Colors_1 = require("./Colors");
var Hoodie = /** @class */ (function (_super) {
    __extends(Hoodie, _super);
    function Hoodie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    Hoodie.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Hoodie', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Hoodie', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("path", { d: 'M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z', id: 'Straps', fill: '#F4F4F4', fillRule: 'evenodd', mask: "url(#" + mask1 + ")" }),
            React.createElement("path", { d: 'M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z', id: 'Shadow', fillOpacity: '0.16', fill: '#000000', fillRule: 'evenodd', mask: "url(#" + mask1 + ")" })));
    };
    Hoodie.optionValue = 'Hoodie';
    return Hoodie;
}(React.Component));
exports.default = Hoodie;
