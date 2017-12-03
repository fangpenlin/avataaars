export default class OptionContext {
    constructor(options) {
        this.stateChangeListeners = new Set();
        this.valueChangeListeners = new Set();
        this._state = {};
        this._data = {};
        this._options = options;
        for (const option of options) {
            this._state[option.key] = {
                key: option.key,
                available: 0,
                options: []
            };
        }
    }
    get options() {
        return this._options;
    }
    get state() {
        return this._state;
    }
    addStateChangeListener(listener) {
        this.stateChangeListeners.add(listener);
    }
    removeStateChangeListener(listener) {
        this.stateChangeListeners.delete(listener);
    }
    addValueChangeListener(listener) {
        this.valueChangeListeners.add(listener);
    }
    removeValueChangeListener(listener) {
        this.valueChangeListeners.delete(listener);
    }
    optionEnter(key) {
        // TODO:
        const optionState = this.getOptionState(key);
        this.setState({
            [key]: Object.assign({}, optionState, { available: optionState.available + 1 })
        });
    }
    optionExit(key) {
        const optionState = this.getOptionState(key);
        this.setState({
            [key]: Object.assign({}, optionState, { available: optionState.available - 1 })
        });
    }
    getOptionState(key) {
        return this.state[key] || null;
    }
    getValue(key) {
        const optionState = this.getOptionState(key);
        if (!optionState) {
            return null;
        }
        const value = this._data[key];
        if (value) {
            return value;
        }
        return optionState.defaultValue || null;
    }
    setValue(key, value) {
        for (const listener of Array.from(this.valueChangeListeners)) {
            listener(key, value);
        }
    }
    // set single source of truth
    setData(data) {
        this._data = data;
        this.notifyListener();
    }
    setDefaultValue(key, defaultValue) {
        const optionState = this.getOptionState(key);
        this.setState({
            [key]: Object.assign({}, optionState, { defaultValue })
        });
    }
    setOptions(key, options) {
        this.setState({
            [key]: Object.assign({}, this.state[key], { key,
                options })
        });
    }
    setState(state) {
        this._state = Object.assign({}, this.state, state);
        this.notifyListener();
    }
    notifyListener() {
        for (const listener of Array.from(this.stateChangeListeners)) {
            listener();
        }
    }
}
