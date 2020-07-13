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
var OptionContext_1 = require("./OptionContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for " + component);
    }
    return optionValue;
}
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContextUpdate = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    Object.defineProperty(Selector.prototype, "optionContext", {
        get: function () {
            return this.context.optionContext;
        },
        enumerable: true,
        configurable: true
    });
    Selector.prototype.componentWillMount = function () {
        var _a = this.props, option = _a.option, defaultOption = _a.defaultOption;
        var optionContext = this.optionContext;
        var defaultValue = (typeof defaultOption === 'string' ?
            defaultOption : getComponentOptionValue(defaultOption));
        optionContext.addStateChangeListener(this.optionContextUpdate);
        optionContext.optionEnter(option.key);
        var optionState = optionContext.getOptionState(option.key);
        this.updateOptionValues();
        if (optionState) {
            optionContext.setDefaultValue(option.key, defaultValue);
        }
    };
    Selector.prototype.componentWillUpdate = function (nextProps) {
        this.updateOptionValues(nextProps);
    };
    Selector.prototype.componentWillUnmount = function () {
        this.optionContext.removeStateChangeListener(this.optionContextUpdate);
        this.optionContext.optionExit(this.props.option.key);
    };
    Selector.prototype.render = function () {
        var result = null;
        var _a = this.props, option = _a.option, children = _a.children;
        var value = this.optionContext.getValue(option.key);
        React.Children.forEach(children, function (child) {
            if (getComponentOptionValue(child.type) === value) {
                result = child;
            }
        });
        return result;
    };
    Selector.prototype.updateOptionValues = function (nextProps) {
        if (nextProps && this.props.children === nextProps.children) {
            return;
        }
        var _a = this.props, option = _a.option, children = _a.children;
        var values = React.Children.map(children, 
        // TODO: also validate and throw error if we don't see optionValue
        function (child) { return getComponentOptionValue(child.type); });
        if (new Set(values).size !== values.length) {
            throw new Error('Duplicate values');
        }
        this.optionContext.setOptions(option.key, values);
    };
    Selector.contextTypes = {
        optionContext: PropTypes.instanceOf(OptionContext_1.default)
    };
    return Selector;
}(React.Component));
exports.default = Selector;
