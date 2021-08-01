export default class Option {
    private _key;
    private _label;
    readonly key: string;
    readonly label: string;
    constructor({key, label}: {
        key: string;
        label: string;
    });
}
