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
var ScreamOpen = /** @class */ (function (_super) {
    __extends(ScreamOpen, _super);
    function ScreamOpen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    ScreamOpen.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Mouth/Scream-Open', transform: 'translate(2.000000, 52.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1, transform: 'translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) ' })),
            React.createElement("use", { id: 'Mouth', fillOpacity: '0.699999988', fill: '#000000', fillRule: 'evenodd', transform: 'translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) ', xlinkHref: '#' + path1 }),
            React.createElement("rect", { id: 'Teeth', fill: '#FFFFFF', fillRule: 'evenodd', mask: "url(#" + mask1 + ")", x: '39', y: '2', width: '31', height: '16', rx: '5' }),
            React.createElement("g", { id: 'Tongue', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#" + mask1 + ")", fill: '#FF4F6D' },
                React.createElement("g", { transform: 'translate(38.000000, 32.000000)', id: 'Say-ahhhh' },
                    React.createElement("circle", { cx: '11', cy: '11', r: '11' }),
                    React.createElement("circle", { cx: '21', cy: '11', r: '11' })))));
    };
    ScreamOpen.optionValue = 'ScreamOpen';
    return ScreamOpen;
}(React.Component));
exports.default = ScreamOpen;
