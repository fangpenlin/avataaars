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
var HairColor_1 = require("./HairColor");
var ShortHairShortFlat = /** @class */ (function (_super) {
    __extends(ShortHairShortFlat, _super);
    function ShortHairShortFlat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    ShortHairShortFlat.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path2, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M180.14998,39.9204083 C177.390206,37.1003988 174.185913,34.7068297 171.069252,32.3065503 C170.381566,31.777442 169.682843,31.2610833 169.010544,30.7118441 C168.857687,30.5870323 167.291999,29.4657388 167.104691,29.0530544 C166.653816,28.0602634 166.915042,28.8332916 166.977255,27.6485857 C167.055857,26.150508 170.11064,21.9193194 167.831176,20.9490079 C166.828413,20.522232 165.039628,21.6579526 164.077671,22.0330592 C162.196235,22.7671676 160.291721,23.3932399 158.346734,23.9330847 C159.278588,22.0763407 161.055333,18.3594977 157.71591,19.3543018 C155.114345,20.1293431 152.690052,22.1219709 150.075777,23.0594018 C150.940735,21.6415124 154.399901,17.2479341 151.274209,17.0023366 C150.301549,16.925839 147.471201,18.7503735 146.423952,19.1395717 C143.287223,20.3054888 140.083264,21.0590571 136.789999,21.6525844 C125.59203,23.6707114 112.497238,23.0953019 102.1368,28.1934632 C94.1494796,32.1236942 86.262502,38.2220278 81.648386,45.987539 C77.2011742,53.472559 75.537818,61.6641751 74.6069673,70.2412987 C73.9239644,76.535909 73.8684412,83.0425652 74.1878671,89.3599905 C74.2922241,91.4297869 74.5250203,100.970847 77.5319724,98.0813859 C79.0300967,96.641688 79.019059,90.8282073 79.3963495,88.8604076 C80.1472513,84.9452748 80.870057,81.0126951 82.122006,77.2227096 C84.3282191,70.5439339 86.9307879,63.4296587 92.4269209,58.8297383 C95.9539853,55.8782066 98.4307906,51.8889248 101.806002,48.9112229 C103.322188,47.5738572 102.165231,47.7130963 104.602902,47.888571 C106.240504,48.006337 107.885464,48.0512961 109.52641,48.0942421 C113.322394,48.1928837 117.124399,48.16772 120.921387,48.1811407 C128.56821,48.208653 136.179243,48.316689 143.818708,47.9164188 C147.213653,47.7385955 150.617965,47.6423024 154.00388,47.3282597 C155.895349,47.152785 159.251496,45.9405668 160.808488,46.8669256 C162.233362,47.7144383 163.71309,50.4817719 164.736257,51.615144 C167.153525,54.2935659 170.035717,56.3392052 172.862385,58.5354911 C178.756547,63.114945 181.732392,68.8666908 183.522515,76.023241 C185.305949,83.1532854 184.805905,89.76815 187.013456,96.78479 C187.401784,98.0184813 188.428965,100.14498 189.695296,98.2389151 C189.930434,97.8849461 189.869559,95.9390277 189.869559,94.819339 C189.869559,90.2995934 191.014141,86.9083772 190.999758,82.3591197 C190.943566,68.5271489 190.49637,50.4908308 180.14998,39.9204083 Z', id: path1 }),
                React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Short-Hair/Short-Flat', mask: "url(#" + mask2 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement(facialHair_1.default, null),
                    React.createElement("mask", { id: mask1, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path1 })),
                    React.createElement("use", { id: 'Short-Hair', stroke: 'none', fill: '#1F3140', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
                    React.createElement(HairColor_1.default, { maskID: mask1 }),
                    this.props.children))));
    };
    ShortHairShortFlat.optionValue = 'ShortHairShortFlat';
    return ShortHairShortFlat;
}(React.Component));
exports.default = ShortHairShortFlat;
