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
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Avatar from './avatar';
import { OptionContext, allOptions } from './options';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, OptionContext, allOptions } from './options';
var AvatarComponent = /** @class */ (function (_super) {
    __extends(AvatarComponent, _super);
    function AvatarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = new OptionContext(allOptions);
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
        return React.createElement(Avatar, { avatarStyle: avatarStyle, style: style });
    };
    AvatarComponent.prototype.updateOptionContext = function (props) {
        var data = {};
        for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
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
        optionContext: PropTypes.instanceOf(OptionContext)
    };
    return AvatarComponent;
}(React.Component));
export default AvatarComponent;
