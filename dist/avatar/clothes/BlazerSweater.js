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
var BlazerSweater = /** @class */ (function (_super) {
    __extends(BlazerSweater, _super);
    function BlazerSweater() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    BlazerSweater.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Blazer-+-Sweater', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement("g", { id: 'Color/Palette/Black', mask: "url(#" + mask1 + ")", fillRule: 'evenodd', fill: '#262E33' },
                React.createElement("rect", { id: '\uD83D\uDD8DColor', x: '0', y: '0', width: '264', height: '110' })),
            React.createElement("g", { id: 'Blazer', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(32.000000, 28.000000)' },
                React.createElement("path", { d: 'M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z', id: 'Saco', fill: '#3A4C5A' }),
                React.createElement("path", { d: 'M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z', id: 'Pocket-hanky', fill: '#E6E6E6' }),
                React.createElement("path", { d: 'M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z', id: 'Wing', fill: '#2F4351' }),
                React.createElement("path", { d: 'M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z', id: 'Wing', fill: '#2F4351', transform: 'translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) ' })),
            React.createElement("path", { d: 'M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z', id: 'Collar', fill: '#F2F2F2', fillRule: 'evenodd' })));
    };
    BlazerSweater.optionValue = 'BlazerSweater';
    return BlazerSweater;
}(React.Component));
exports.default = BlazerSweater;
