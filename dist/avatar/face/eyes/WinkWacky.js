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
var WinkWacky = /** @class */ (function (_super) {
    __extends(WinkWacky, _super);
    function WinkWacky() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinkWacky.prototype.render = function () {
        return (React.createElement("g", { id: 'Eyes/Wink-Wacky-\uD83D\uDE1C', transform: 'translate(0.000000, 8.000000)' },
            React.createElement("circle", { id: 'Cornea?-I-don\'t-know', fill: '#FFFFFF', cx: '82', cy: '22', r: '12' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.699999988', fill: '#000000', cx: '82', cy: '22', r: '6' }),
            React.createElement("path", { d: 'M16.1601674,25.4473116 C18.006676,21.648508 22.1644225,19 26.9975803,19 C31.8136766,19 35.9591217,21.629842 37.8153518,25.4071242 C38.3667605,26.5291977 37.5821037,27.4474817 36.790607,26.7670228 C34.3395063,24.6597833 30.8587163,23.3437884 26.9975803,23.3437884 C23.2572061,23.3437884 19.8737584,24.5787519 17.4375392,26.5716412 C16.5467928,27.3002944 15.6201012,26.5583844 16.1601674,25.4473116 Z', id: 'Winky-Doodle', fillOpacity: '0.599999964', fill: '#000000' })));
    };
    WinkWacky.optionValue = 'WinkWacky';
    return WinkWacky;
}(React.Component));
exports.default = WinkWacky;
