"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var Round = /** @class */ (function (_super) {
    __extends(Round, _super);
    function Round() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.filter1 = (0, lodash_1.uniqueId)('react-filter-');
        return _this;
    }
    Round.prototype.render = function () {
        var _a = this, path1 = _a.path1, filter1 = _a.filter1;
        return (React.createElement("g", { id: 'Top/_Resources/Round', fill: 'none', transform: 'translate(62.000000, 85.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M80.4646192,16.3941179 C84.3801509,8.45869677 92.552602,3 102,3 C110.919691,3 118.702887,7.86591082 122.839921,15.0880638 C123.050197,15.0306504 123.271519,15 123.5,15 L131.5,15 C132.880712,15 134,16.1192881 134,17.5 C134,18.8807119 132.880712,20 131.5,20 L124.963126,20 C125.637355,22.2145921 126,24.5649459 126,27 C126,40.254834 115.254834,51 102,51 C88.745166,51 78,40.254834 78,27 C78,25.5781066 78.1236513,24.1850936 78.3607874,22.8311273 C78.2762458,18.4553035 74.9135957,15 70.8624171,15 C67.1256697,15 63.9747186,17.9397535 63.4417635,21.8300629 C63.8073299,23.4951922 64,25.2250958 64,27 C64,40.254834 53.254834,51 40,51 C26.745166,51 16,40.254834 16,27 C16,24.5649459 16.3626451,22.2145921 17.0368738,20 L10.5,20 C9.11928813,20 8,18.8807119 8,17.5 C8,16.1192881 9.11928813,15 10.5,15 L10.5,15 L18.5,15 C18.728481,15 18.9498033,15.0306504 19.1600793,15.0880638 C23.2971127,7.86591082 31.0803092,3 40,3 C49.3521568,3 57.4549431,8.34919095 61.415666,16.15488 C63.4929212,13.0392725 66.9494432,11 70.8624171,11 C74.8746823,11 78.4070368,13.1440781 80.4646192,16.3941179 Z M40,47 C51.045695,47 60,38.045695 60,27 C60,15.954305 51.045695,7 40,7 C28.954305,7 20,15.954305 20,27 C20,38.045695 28.954305,47 40,47 Z M102,47 C113.045695,47 122,38.045695 122,27 C122,15.954305 113.045695,7 102,7 C90.954305,7 82,15.954305 82,27 C82,38.045695 90.954305,47 102,47 Z', id: path1 }),
                React.createElement("filter", { x: '-0.8%', y: '-2.1%', width: '101.6%', height: '108.3%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0', type: 'matrix', in: 'shadowOffsetOuter1' }))),
            React.createElement("g", { id: 'Lennon-Glasses' },
                React.createElement("use", { fill: 'black', fillOpacity: '1', filter: "url(#".concat(filter1, ")"), xlinkHref: '#' + path1 }),
                React.createElement("use", { fill: '#252C2F', fillRule: 'evenodd', xlinkHref: '#' + path1 }))));
    };
    Round.optionValue = 'Round';
    return Round;
}(React.Component));
exports.default = Round;
