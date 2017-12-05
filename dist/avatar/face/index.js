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
import Eyebrow from './eyebrow';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose/Default';
var Face = /** @class */ (function (_super) {
    __extends(Face, _super);
    function Face() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Face.prototype.render = function () {
        return (React.createElement("g", { id: 'Face', transform: 'translate(76.000000, 82.000000)', fill: '#000000' },
            React.createElement(Mouth, null),
            React.createElement(Nose, null),
            React.createElement(Eyes, null),
            React.createElement(Eyebrow, null)));
    };
    return Face;
}(React.Component));
export default Face;
