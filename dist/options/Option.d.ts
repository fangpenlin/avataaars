export default class Option {
    private _key;
    private _label;
    get key(): string;
    get label(): string;
    constructor({ key, label }: {
        key: string;
        label: string;
    });
}
