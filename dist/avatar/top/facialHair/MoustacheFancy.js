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
var Colors_1 = require("./Colors");
var MoustacheFancy = /** @class */ (function (_super) {
    __extends(MoustacheFancy, _super);
    function MoustacheFancy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    MoustacheFancy.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/Moustache-Fancy', transform: 'translate(49.000000, 72.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Moustache-U-a-Question', fill: '#28354B', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    MoustacheFancy.optionValue = 'MoustacheFancy';
    return MoustacheFancy;
}(React.Component));
exports.default = MoustacheFancy;
