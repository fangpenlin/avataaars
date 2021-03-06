"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Option = /** @class */ (function () {
    function Option(_a) {
        var key = _a.key, label = _a.label;
        this._key = key;
        this._label = label;
    }
    Object.defineProperty(Option.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    return Option;
}());
exports.default = Option;
