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
exports.Piece = exports.allOptions = exports.OptionContext = exports.Option = exports.AvatarStyle = exports.Avatar = void 0;
var PropTypes = require("prop-types");
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var avatar_2 = require("./avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return avatar_2.default; } });
Object.defineProperty(exports, "AvatarStyle", { enumerable: true, get: function () { return avatar_2.AvatarStyle; } });
var options_2 = require("./options");
Object.defineProperty(exports, "Option", { enumerable: true, get: function () { return options_2.Option; } });
Object.defineProperty(exports, "OptionContext", { enumerable: true, get: function () { return options_2.OptionContext; } });
Object.defineProperty(exports, "allOptions", { enumerable: true, get: function () { return options_2.allOptions; } });
var piece_1 = require("./avatar/piece");
var AvatarComponent = /** @class */ (function (_super) {
    __extends(AvatarComponent, _super);
    function AvatarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        return _this;
    }
    AvatarComponent.prototype.getChildContext = function () {
        return { optionContext: this.optionContext };
    };
    AvatarComponent.prototype.UNSAFE_componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    AvatarComponent.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    AvatarComponent.prototype.render = function () {
        var _a = this.props, avatarStyle = _a.avatarStyle, style = _a.style, className = _a.className;
        return React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style, className: className });
    };
    AvatarComponent.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_1 = options_1.allOptions; _i < allOptions_1.length; _i++) {
            var option = allOptions_1[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    AvatarComponent.childContextTypes = {
        optionContext: PropTypes.instanceOf(options_1.OptionContext)
    };
    return AvatarComponent;
}(React.Component));
exports.default = AvatarComponent;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new options_1.OptionContext(options_1.allOptions);
        return _this;
    }
    Piece.prototype.getChildContext = function () {
        return { optionContext: this.optionContext };
    };
    Piece.prototype.UNSAFE_componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    Piece.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    Piece.prototype.render = function () {
        var _a = this.props, avatarStyle = _a.avatarStyle, style = _a.style, pieceType = _a.pieceType, pieceSize = _a.pieceSize, viewBox = _a.viewBox;
        return React.createElement(piece_1.default, { avatarStyle: avatarStyle, style: style, pieceType: pieceType, pieceSize: pieceSize, viewBox: viewBox });
    };
    Piece.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_2 = options_1.allOptions; _i < allOptions_2.length; _i++) {
            var option = allOptions_2[_i];
            var value = props[option.key];
            if (!value) {
                continue;
            }
            data[option.key] = value;
        }
        this.optionContext.setData(data);
    };
    Piece.childContextTypes = {
        optionContext: PropTypes.instanceOf(options_1.OptionContext)
    };
    return Piece;
}(React.Component));
exports.Piece = Piece;
