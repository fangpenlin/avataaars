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
var Eyepatch_1 = require("./Eyepatch");
var Hat_1 = require("./Hat");
var Hijab_1 = require("./Hijab");
var LongHairBigHair_1 = require("./LongHairBigHair");
var LongHairBob_1 = require("./LongHairBob");
var LongHairBun_1 = require("./LongHairBun");
var LongHairCurly_1 = require("./LongHairCurly");
var LongHairCurvy_1 = require("./LongHairCurvy");
var LongHairDreads_1 = require("./LongHairDreads");
var LongHairFrida_1 = require("./LongHairFrida");
var LongHairFro_1 = require("./LongHairFro");
var LongHairFroBand_1 = require("./LongHairFroBand");
var LongHairMiaWallace_1 = require("./LongHairMiaWallace");
var LongHairNotTooLong_1 = require("./LongHairNotTooLong");
var LongHairShavedSides_1 = require("./LongHairShavedSides");
var LongHairStraight_1 = require("./LongHairStraight");
var LongHairStraight2_1 = require("./LongHairStraight2");
var LongHairStraightStrand_1 = require("./LongHairStraightStrand");
var NoHair_1 = require("./NoHair");
var ShortHairDreads01_1 = require("./ShortHairDreads01");
var ShortHairDreads02_1 = require("./ShortHairDreads02");
var ShortHairFrizzle_1 = require("./ShortHairFrizzle");
var ShortHairShaggyMullet_1 = require("./ShortHairShaggyMullet");
var ShortHairShortCurly_1 = require("./ShortHairShortCurly");
var ShortHairShortFlat_1 = require("./ShortHairShortFlat");
var ShortHairShortRound_1 = require("./ShortHairShortRound");
var ShortHairShortWaved_1 = require("./ShortHairShortWaved");
var ShortHairSides_1 = require("./ShortHairSides");
var ShortHairTheCaesar_1 = require("./ShortHairTheCaesar");
var ShortHairTheCaesarSidePart_1 = require("./ShortHairTheCaesarSidePart");
var Turban_1 = require("./Turban");
var WinterHat1_1 = require("./WinterHat1");
var WinterHat2_1 = require("./WinterHat2");
var WinterHat3_1 = require("./WinterHat3");
var WinterHat4_1 = require("./WinterHat4");
var options_1 = require("../../options");
var Top = /** @class */ (function (_super) {
    __extends(Top, _super);
    function Top() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Top.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(options_1.Selector, { defaultOption: LongHairStraight_1.default, option: options_1.TopOption },
            React.createElement(NoHair_1.default, null, children),
            React.createElement(Eyepatch_1.default, null, children),
            React.createElement(Hat_1.default, null, children),
            React.createElement(Hijab_1.default, null, children),
            React.createElement(Turban_1.default, null, children),
            React.createElement(WinterHat1_1.default, null, children),
            React.createElement(WinterHat2_1.default, null, children),
            React.createElement(WinterHat3_1.default, null, children),
            React.createElement(WinterHat4_1.default, null, children),
            React.createElement(LongHairBigHair_1.default, null, children),
            React.createElement(LongHairBob_1.default, null, children),
            React.createElement(LongHairBun_1.default, null, children),
            React.createElement(LongHairCurly_1.default, null, children),
            React.createElement(LongHairCurvy_1.default, null, children),
            React.createElement(LongHairDreads_1.default, null, children),
            React.createElement(LongHairFrida_1.default, null, children),
            React.createElement(LongHairFro_1.default, null, children),
            React.createElement(LongHairFroBand_1.default, null, children),
            React.createElement(LongHairNotTooLong_1.default, null, children),
            React.createElement(LongHairShavedSides_1.default, null, children),
            React.createElement(LongHairMiaWallace_1.default, null, children),
            React.createElement(LongHairStraight_1.default, null, children),
            React.createElement(LongHairStraight2_1.default, null, children),
            React.createElement(LongHairStraightStrand_1.default, null, children),
            React.createElement(ShortHairDreads01_1.default, null, children),
            React.createElement(ShortHairDreads02_1.default, null, children),
            React.createElement(ShortHairFrizzle_1.default, null, children),
            React.createElement(ShortHairShaggyMullet_1.default, null, children),
            React.createElement(ShortHairShortCurly_1.default, null, children),
            React.createElement(ShortHairShortFlat_1.default, null, children),
            React.createElement(ShortHairShortRound_1.default, null, children),
            React.createElement(ShortHairShortWaved_1.default, null, children),
            React.createElement(ShortHairSides_1.default, null, children),
            React.createElement(ShortHairTheCaesar_1.default, null, children),
            React.createElement(ShortHairTheCaesarSidePart_1.default, null, children)));
    };
    return Top;
}(React.Component));
exports.default = Top;
