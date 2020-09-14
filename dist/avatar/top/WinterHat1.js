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
var facialHair_1 = require("./facialHair");
var HatColor_1 = require("./HatColor");
var WinterHat1 = /** @class */ (function (_super) {
    __extends(WinterHat1, _super);
    function WinterHat1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        _this.path3 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    WinterHat1.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3;
        return (React.createElement("g", { id: "Top" },
            React.createElement("defs", null,
                React.createElement("rect", { id: path3, x: "0", y: "0", width: "264", height: "280" }),
                React.createElement("path", { d: "M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z", id: path1 }),
                React.createElement("filter", { x: "-0.8%", y: "-2.8%", width: "101.7%", height: "111.1%", filterUnits: "objectBoundingBox", id: filter1 },
                    React.createElement("feOffset", { dx: "0", dy: "2", in: "SourceAlpha", result: "shadowOffsetOuter1" }),
                    React.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0", type: "matrix", in: "shadowOffsetOuter1" })),
                React.createElement("rect", { id: path2, x: "74", y: "50", width: "118", height: "36", rx: "8" })),
            React.createElement("mask", { id: mask1, fill: "white" },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("g", { id: "Mask" }),
            React.createElement("g", { id: "Top/Accessories/Winter-Hat-1", transform: "translate(-1.000000, 0.000000)" },
                React.createElement("g", { id: "hat", strokeWidth: "1", fillRule: "evenodd", transform: "translate(63.000000, 20.000000)" },
                    React.createElement("path", { d: "M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z", id: "inside", fill: "#F4F4F4" }),
                    React.createElement("mask", { id: mask2, fill: "white" },
                        React.createElement("use", { xlinkHref: '#' + path1 })),
                    React.createElement("use", { id: "hat-mask", fill: "#D8D8D8", xlinkHref: '#' + path1 }),
                    React.createElement(HatColor_1.default, { maskID: mask2, defaultColor: "Red" })),
                React.createElement("g", { id: "hat-front" },
                    React.createElement("use", { fill: "black", fillOpacity: "1", filter: "url(#" + path2 + ")", xlinkHref: '#' + path2 }),
                    React.createElement("use", { fill: "#F4F4F4", fillRule: "evenodd", xlinkHref: '#' + path2 })),
                React.createElement(facialHair_1.default, null),
                this.props.children)));
    };
    WinterHat1.optionValue = 'WinterHat1';
    return WinterHat1;
}(React.Component));
exports.default = WinterHat1;
