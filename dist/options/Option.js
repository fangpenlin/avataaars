export default class Option {
    get key() {
        return this._key;
    }
    get label() {
        return this._label;
    }
    constructor({ key, label }) {
        this._key = key;
        this._label = label;
    }
}
