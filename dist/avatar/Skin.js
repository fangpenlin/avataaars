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
import * as React from 'react';
import { Selector, SkinOption } from '../options';
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: 'Skin/👶🏽-03-Brown', mask: "url(#" + this.props.maskID + ")", fill: color },
                React.createElement("g", { transform: 'translate(-32.000000, 0.000000)', id: 'Color' },
                    React.createElement("rect", { x: '0', y: '0', width: '264', height: '244' }))));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Tanned = makeColor('Tanned', '#FD9841');
var Yellow = makeColor('Yellow', '#F8D25C');
var Pale = makeColor('Pale', '#FFDBB4');
var Light = makeColor('Light', '#EDB98A');
var Brown = makeColor('Brown', '#D08B5B');
var DarkBrown = makeColor('DarkBrown', '#AE5D29');
var Black = makeColor('Black', '#614335');
var Skin = /** @class */ (function (_super) {
    __extends(Skin, _super);
    function Skin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skin.prototype.render = function () {
        return (React.createElement(Selector, { option: SkinOption, defaultOption: Light },
            React.createElement(Tanned, { maskID: this.props.maskID }),
            React.createElement(Yellow, { maskID: this.props.maskID }),
            React.createElement(Pale, { maskID: this.props.maskID }),
            React.createElement(Light, { maskID: this.props.maskID }),
            React.createElement(Brown, { maskID: this.props.maskID }),
            React.createElement(DarkBrown, { maskID: this.props.maskID }),
            React.createElement(Black, { maskID: this.props.maskID })));
    };
    return Skin;
}(React.Component));
export default Skin;
