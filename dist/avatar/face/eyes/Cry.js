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
var Cry = /** @class */ (function (_super) {
    __extends(Cry, _super);
    function Cry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cry.prototype.render = function () {
        return (React.createElement("g", { id: 'Eyes/Cry-\uD83D\uDE22', transform: 'translate(0.000000, 8.000000)' },
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.599999964', fill: '#000000', fillRule: 'evenodd', cx: '30', cy: '22', r: '6' }),
            React.createElement("path", { d: 'M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z', id: 'Drop', fill: '#92D9FF', fillRule: 'nonzero' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.599999964', fill: '#000000', fillRule: 'evenodd', cx: '82', cy: '22', r: '6' })));
    };
    Cry.optionValue = 'Cry';
    return Cry;
}(React.Component));
exports.default = Cry;
