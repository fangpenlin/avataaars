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
var clothes_1 = require("./clothes");
var Graphics_1 = require("./clothes/Graphics");
var accessories_1 = require("./top/accessories");
var facialHair_1 = require("./top/facialHair");
var top_1 = require("./top");
var eyes_1 = require("./face/eyes");
var eyebrow_1 = require("./face/eyebrow");
var mouth_1 = require("./face/mouth");
var nose_1 = require("./face/nose");
var Skin_1 = require("./Skin");
var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["Circle"] = "Circle";
    AvatarStyle["Transparent"] = "Transparent";
})(AvatarStyle = exports.AvatarStyle || (exports.AvatarStyle = {}));
var PieceComponent = /** @class */ (function (_super) {
    __extends(PieceComponent, _super);
    function PieceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieceComponent.prototype.render = function () {
        return (React.createElement("svg", { style: this.props.style, width: this.props.pieceSize + "px", height: this.props.pieceSize + "px", viewBox: this.props.viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
            this.props.pieceType === 'top' && React.createElement(top_1.default, null),
            this.props.pieceType === 'clothe' && React.createElement(clothes_1.default, null),
            this.props.pieceType === 'graphics' && React.createElement(Graphics_1.default, { maskID: "1234" }),
            (this.props.pieceType === 'accessories' ||
                this.props.pieceType === 'accesories') && React.createElement(accessories_1.default, null),
            this.props.pieceType === 'facialHair' && React.createElement(facialHair_1.default, null),
            this.props.pieceType === 'eyes' && React.createElement(eyes_1.default, null),
            this.props.pieceType === 'eyebrows' && React.createElement(eyebrow_1.default, null),
            this.props.pieceType === 'mouth' && React.createElement(mouth_1.default, null),
            this.props.pieceType === 'nose' && React.createElement(nose_1.default, null),
            this.props.pieceType === 'skin' && React.createElement(Skin_1.default, { maskID: "5678" })));
    };
    return PieceComponent;
}(React.Component));
exports.default = PieceComponent;
