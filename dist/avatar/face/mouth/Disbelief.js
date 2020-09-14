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
var Disbelief = /** @class */ (function (_super) {
    __extends(Disbelief, _super);
    function Disbelief() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Disbelief.prototype.render = function () {
        return (React.createElement("g", { id: 'Mouth/Disbelief', transform: 'translate(2.000000, 52.000000)', fillOpacity: '0.699999988', fill: '#000000' },
            React.createElement("path", { d: 'M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15', id: 'Mouth', transform: 'translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) ' })));
    };
    Disbelief.optionValue = 'Disbelief';
    return Disbelief;
}(React.Component));
exports.default = Disbelief;
