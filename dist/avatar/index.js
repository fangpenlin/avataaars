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
exports.AvatarStyle = void 0;
var React = require("react");
var lodash_1 = require("lodash");
var accessories_1 = require("./top/accessories");
var clothes_1 = require("./clothes");
var face_1 = require("./face");
var Skin_1 = require("./Skin");
var top_1 = require("./top");
var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["Circle"] = "Circle";
    AvatarStyle["Transparent"] = "Transparent";
})(AvatarStyle = exports.AvatarStyle || (exports.AvatarStyle = {}));
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        _this.path3 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.mask3 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    Avatar.prototype.render = function () {
        var _a = this, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3, mask1 = _a.mask1, mask2 = _a.mask2, mask3 = _a.mask3;
        var avatarStyle = this.props.avatarStyle;
        var circle = avatarStyle === AvatarStyle.Circle;
        return (React.createElement("svg", { style: this.props.style, className: this.props.className, width: "264px", height: "280px", viewBox: "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
            React.createElement("desc", null, "Created with getavataaars.com"),
            React.createElement("defs", null,
                React.createElement("circle", { id: path1, cx: "120", cy: "120", r: "120" }),
                React.createElement("path", { d: "M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z", id: path2 }),
                React.createElement("path", { d: "M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z", id: path3 })),
            React.createElement("g", { id: "Avataaar", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                React.createElement("g", { transform: "translate(-825.000000, -1100.000000)", id: "Avataaar/Circle" },
                    React.createElement("g", { transform: "translate(825.000000, 1100.000000)" },
                        circle ? (React.createElement("g", { id: "Circle", strokeWidth: "1", fillRule: "evenodd", transform: "translate(12.000000, 40.000000)" },
                            React.createElement("mask", { id: mask1, fill: "white" },
                                React.createElement("use", { xlinkHref: '#' + path1 })),
                            React.createElement("use", { id: "Circle-Background", fill: "#E6E6E6", xlinkHref: '#' + path1 }),
                            React.createElement("g", { id: "Color/Palette/Blue-01", mask: 'url(#' + mask1 + ')', fill: "#65C9FF" },
                                React.createElement("rect", { id: "\uD83D\uDD8DColor", x: "0", y: "0", width: "240", height: "240" })))) : null,
                        circle ? (React.createElement("mask", { id: mask2, fill: "white" },
                            React.createElement("use", { xlinkHref: '#' + path2 }))) : null,
                        React.createElement("g", { id: "Mask" }),
                        React.createElement("g", { id: "Avataaar", strokeWidth: "1", fillRule: "evenodd", mask: 'url(#' + mask2 + ')' },
                            React.createElement("g", { id: "Body", transform: "translate(32.000000, 36.000000)" },
                                React.createElement("mask", { id: mask3, fill: "white" },
                                    React.createElement("use", { xlinkHref: '#' + path3 })),
                                React.createElement("use", { fill: "#D0C6AC", xlinkHref: '#' + path3 }),
                                React.createElement(Skin_1.default, { maskID: mask3 }),
                                React.createElement("path", { d: "M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z", id: "Neck-Shadow", fillOpacity: "0.100000001", fill: "#000000", mask: 'url(#' + mask3 + ')' })),
                            React.createElement(clothes_1.default, null),
                            React.createElement(face_1.default, null),
                            React.createElement(top_1.default, null,
                                React.createElement(accessories_1.default, null))))))));
    };
    return Avatar;
}(React.Component));
exports.default = Avatar;
