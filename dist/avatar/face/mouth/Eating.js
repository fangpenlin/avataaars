"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Eating = /** @class */ (function (_super) {
    __extends(Eating, _super);
    function Eating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eating.prototype.render = function () {
        return (React.createElement("g", { id: 'Mouth/Eating', transform: 'translate(2.000000, 52.000000)' },
            React.createElement("g", { id: 'Om-Nom-Nom', opacity: '0.599999964', strokeWidth: '1', transform: 'translate(28.000000, 6.000000)', fillOpacity: '0.599999964', fill: '#000000' },
                React.createElement("path", { d: 'M16.1906378,10.106319 C16.0179484,4.99553347 11.7923466,0.797193688 6.29352385,0 C9.66004124,1.95870633 11.9804619,5.49520667 11.9804619,9.67694348 C11.9804619,15.344608 6.50694731,20.2451296 0.176591694,20.2451296 C0.11761218,20.2451296 0.0587475828,20.2447983 0,20.244138 L8.8963743e-11,20.244138 C1.35764479,20.7317259 2.83995964,21 4.39225962,21 C9.71395931,21 14.2131224,17.8469699 15.6863572,13.5136402 C18.1609431,15.6698775 21.8629994,17.0394229 26,17.0394229 C30.1370006,17.0394229 33.8390569,15.6698775 36.3136428,13.5136402 C37.7868776,17.8469699 42.2860407,21 47.6077404,21 C49.1600404,21 50.6423552,20.7317259 52,20.244138 L52,20.244138 C51.9412524,20.2447983 51.8823878,20.2451296 51.8234083,20.2451296 C45.4930527,20.2451296 40.0195381,15.344608 40.0195381,9.67694348 C40.0195381,5.49520667 42.3399588,1.95870633 45.7064761,0 C40.2076534,0.797193688 35.9820516,4.99553347 35.8093622,10.106319 C33.2452605,11.8422828 29.7948543,12.9056086 26,12.9056086 C22.2051457,12.9056086 18.7547395,11.8422828 16.1906378,10.106319 Z', id: 'Delicious' })),
            React.createElement("circle", { id: 'Redish', fillOpacity: '0.2', fill: '#FF4646', cx: '17', cy: '15', r: '9' }),
            React.createElement("circle", { id: 'Redish', fillOpacity: '0.2', fill: '#FF4646', cx: '91', cy: '15', r: '9' })));
    };
    Eating.optionValue = 'Eating';
    return Eating;
}(React.Component));
exports.default = Eating;
