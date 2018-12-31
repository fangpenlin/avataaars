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
var PropTypes = require("prop-types");
var React = require("react");
var avatar_1 = require("./avatar");
var options_1 = require("./options");
var avatar_2 = require("./avatar");
exports.Avatar = avatar_2.default;
exports.AvatarStyle = avatar_2.AvatarStyle;
var options_2 = require("./options");
exports.Option = options_2.Option;
exports.OptionContext = options_2.OptionContext;
exports.allOptions = options_2.allOptions;
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
    AvatarComponent.prototype.componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    AvatarComponent.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    AvatarComponent.prototype.render = function () {
        var _a = this.props, avatarStyle = _a.avatarStyle, style = _a.style;
        return React.createElement(avatar_1.default, { avatarStyle: avatarStyle, style: style });
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
    Piece.prototype.componentWillMount = function () {
        this.updateOptionContext(this.props);
    };
    Piece.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateOptionContext(nextProps);
    };
    Piece.prototype.render = function () {
        var _a = this.props, avatarStyle = _a.avatarStyle, style = _a.style, pieceType = _a.pieceType, pieceSize = _a.pieceSize;
        return React.createElement(piece_1.default, { avatarStyle: avatarStyle, style: style, pieceType: pieceType, pieceSize: pieceSize });
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
