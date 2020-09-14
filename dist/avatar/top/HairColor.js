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
var options_1 = require("../../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: 'Skin/\uD83D\uDC76\uD83C\uDFFD-03-Brown', mask: "url(#" + this.props.maskID + ")", fill: color },
                React.createElement("g", { transform: 'translate(0.000000, 0.000000) ', id: 'Color' },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '280' }))));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Auburn = makeColor('Auburn', '#A55728');
var Black = makeColor('Black', '#2C1B18');
var Blonde = makeColor('Blonde', '#B58143');
var BlondeGolden = makeColor('BlondeGolden', '#D6B370');
var Brown = makeColor('Brown', '#724133');
var BrownDark = makeColor('BrownDark', '#4A312C');
var PastelPink = makeColor('PastelPink', '#F59797');
var Platinum = makeColor('Platinum', '#ECDCBF');
var Red = makeColor('Red', '#C93305');
var SilverGray = makeColor('SilverGray', '#E8E1E1');
var HairColor = /** @class */ (function (_super) {
    __extends(HairColor, _super);
    function HairColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HairColor.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.HairColorOption, defaultOption: BrownDark },
            React.createElement(Auburn, { maskID: this.props.maskID }),
            React.createElement(Black, { maskID: this.props.maskID }),
            React.createElement(Blonde, { maskID: this.props.maskID }),
            React.createElement(BlondeGolden, { maskID: this.props.maskID }),
            React.createElement(Brown, { maskID: this.props.maskID }),
            React.createElement(BrownDark, { maskID: this.props.maskID }),
            React.createElement(PastelPink, { maskID: this.props.maskID }),
            React.createElement(Platinum, { maskID: this.props.maskID }),
            React.createElement(Red, { maskID: this.props.maskID }),
            React.createElement(SilverGray, { maskID: this.props.maskID })));
    };
    return HairColor;
}(React.Component));
exports.default = HairColor;
