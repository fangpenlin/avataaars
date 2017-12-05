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
import Eyepatch from './Eyepatch';
import Hat from './Hat';
import Hijab from './Hijab';
import LongHairBigHair from './LongHairBigHair';
import LongHairBob from './LongHairBob';
import LongHairBun from './LongHairBun';
import LongHairCurly from './LongHairCurly';
import LongHairCurvy from './LongHairCurvy';
import LongHairDreads from './LongHairDreads';
import LongHairFrida from './LongHairFrida';
import LongHairFro from './LongHairFro';
import LongHairFroBand from './LongHairFroBand';
import LongHairMiaWallace from './LongHairMiaWallace';
import LongHairNotTooLong from './LongHairNotTooLong';
import LongHairShavedSides from './LongHairShavedSides';
import LongHairStraight from './LongHairStraight';
import LongHairStraight2 from './LongHairStraight2';
import LongHairStraightStrand from './LongHairStraightStrand';
import NoHair from './NoHair';
import ShortHairDreads01 from './ShortHairDreads01';
import ShortHairDreads02 from './ShortHairDreads02';
import ShortHairFrizzle from './ShortHairFrizzle';
import ShortHairShaggyMullet from './ShortHairShaggyMullet';
import ShortHairShortCurly from './ShortHairShortCurly';
import ShortHairShortFlat from './ShortHairShortFlat';
import ShortHairShortRound from './ShortHairShortRound';
import ShortHairShortWaved from './ShortHairShortWaved';
import ShortHairSides from './ShortHairSides';
import ShortHairTheCaesar from './ShortHairTheCaesar';
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart';
import Turban from './Turban';
import { Selector, TopOption } from '../../options';
var Top = /** @class */ (function (_super) {
    __extends(Top, _super);
    function Top() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Top.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(Selector, { defaultOption: LongHairStraight, option: TopOption },
            React.createElement(NoHair, null, children),
            React.createElement(Eyepatch, null, children),
            React.createElement(Hat, null, children),
            React.createElement(Hijab, null, children),
            React.createElement(Turban, null, children),
            React.createElement(LongHairBigHair, null, children),
            React.createElement(LongHairBob, null, children),
            React.createElement(LongHairBun, null, children),
            React.createElement(LongHairCurly, null, children),
            React.createElement(LongHairCurvy, null, children),
            React.createElement(LongHairDreads, null, children),
            React.createElement(LongHairFrida, null, children),
            React.createElement(LongHairFro, null, children),
            React.createElement(LongHairFroBand, null, children),
            React.createElement(LongHairNotTooLong, null, children),
            React.createElement(LongHairShavedSides, null, children),
            React.createElement(LongHairMiaWallace, null, children),
            React.createElement(LongHairStraight, null, children),
            React.createElement(LongHairStraight2, null, children),
            React.createElement(LongHairStraightStrand, null, children),
            React.createElement(ShortHairDreads01, null, children),
            React.createElement(ShortHairDreads02, null, children),
            React.createElement(ShortHairFrizzle, null, children),
            React.createElement(ShortHairShaggyMullet, null, children),
            React.createElement(ShortHairShortCurly, null, children),
            React.createElement(ShortHairShortFlat, null, children),
            React.createElement(ShortHairShortRound, null, children),
            React.createElement(ShortHairShortWaved, null, children),
            React.createElement(ShortHairSides, null, children),
            React.createElement(ShortHairTheCaesar, null, children),
            React.createElement(ShortHairTheCaesarSidePart, null, children)));
    };
    return Top;
}(React.Component));
export default Top;
