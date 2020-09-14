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
var WinterHat4 = /** @class */ (function (_super) {
    __extends(WinterHat4, _super);
    function WinterHat4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.mask3 = lodash_1.uniqueId('react-mask-');
        _this.mask4 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        _this.path3 = lodash_1.uniqueId('react-path-');
        _this.path4 = lodash_1.uniqueId('react-path-');
        _this.path5 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    WinterHat4.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3, mask4 = _a.mask4, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, path4 = _a.path4, path5 = _a.path5;
        return (React.createElement("g", { id: 'Top' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path5, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z', id: path1 }),
                React.createElement("path", { d: 'M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z', id: path2 }),
                React.createElement("path", { d: 'M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z', id: path3 }),
                React.createElement("filter", { x: '-0.7%', y: '-1.7%', width: '101.4%', height: '106.8%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0', type: 'matrix', in: 'shadowOffsetOuter1' })),
                React.createElement("path", { d: 'M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z', id: path4 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path5 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Accessories/Winter-Hat-4', transform: 'translate(-1.000000, 0.000000)' },
                React.createElement("g", { id: 'hat', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(65.000000, 4.000000)' },
                    React.createElement("mask", { id: mask2, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path1 })),
                    React.createElement("use", { id: 'hat-mask', fill: '#D8D8D8', xlinkHref: '#' + path1 }),
                    React.createElement(HatColor_1.default, { maskID: mask2, defaultColor: 'Red' }),
                    React.createElement("mask", { id: mask3, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path2 })),
                    React.createElement("use", { id: 'shadow', fillOpacity: '0.24', fill: '#000000', xlinkHref: '#' + path2 }),
                    React.createElement("mask", { id: mask4, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path3 })),
                    React.createElement("use", { id: 'light', fillOpacity: '0.300000012', fill: '#FFFFFF', xlinkHref: '#' + path3 })),
                React.createElement("g", { id: 'hat-front' },
                    React.createElement("use", { fill: 'black', fillOpacity: '1', filter: "url(#" + path4 + ")", xlinkHref: '#' + path4 }),
                    React.createElement("use", { fill: '#F4F4F4', fillRule: 'evenodd', xlinkHref: '#' + path4 })),
                React.createElement(facialHair_1.default, null),
                this.props.children)));
    };
    WinterHat4.optionValue = 'WinterHat4';
    return WinterHat4;
}(React.Component));
exports.default = WinterHat4;
