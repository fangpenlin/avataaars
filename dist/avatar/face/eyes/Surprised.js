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
var Surprised = /** @class */ (function (_super) {
    __extends(Surprised, _super);
    function Surprised() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Surprised.prototype.render = function () {
        return (React.createElement("g", { id: 'Eyes/Surprised-\uD83D\uDE33', transform: 'translate(0.000000, 8.000000)' },
            React.createElement("circle", { id: 'The-White-Stuff', fill: '#FFFFFF', cx: '30', cy: '22', r: '14' }),
            React.createElement("circle", { id: 'Eye-Ball', fill: '#FFFFFF', cx: '82', cy: '22', r: '14' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '30', cy: '22', r: '6' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '82', cy: '22', r: '6' })));
    };
    Surprised.optionValue = 'Surprised';
    return Surprised;
}(React.Component));
exports.default = Surprised;
