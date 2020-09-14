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
var Wink = /** @class */ (function (_super) {
    __extends(Wink, _super);
    function Wink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wink.prototype.render = function () {
        return (React.createElement("g", { id: 'Eyes/Wink-\uD83D\uDE09', transform: 'translate(0.000000, 8.000000)', fillOpacity: '0.599999964' },
            React.createElement("circle", { id: 'Eye', cx: '30', cy: '22', r: '6' }),
            React.createElement("path", { d: 'M70.4123979,24.204889 C72.2589064,20.4060854 76.4166529,17.7575774 81.2498107,17.7575774 C86.065907,17.7575774 90.2113521,20.3874194 92.0675822,24.1647016 C92.618991,25.2867751 91.8343342,26.2050591 91.0428374,25.5246002 C88.5917368,23.4173607 85.1109468,22.1013658 81.2498107,22.1013658 C77.5094365,22.1013658 74.1259889,23.3363293 71.6897696,25.3292186 C70.7990233,26.0578718 69.8723316,25.3159619 70.4123979,24.204889 Z', id: 'Winky-Wink', transform: 'translate(81.252230, 21.757577) rotate(-4.000000) translate(-81.252230, -21.757577) ' })));
    };
    Wink.optionValue = 'Wink';
    return Wink;
}(React.Component));
exports.default = Wink;
