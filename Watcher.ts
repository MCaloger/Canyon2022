export default class Watcher {
    storageName: string;
    fn: any;

    constructor(storageName: string, fn: any) {
        this.storageName = storageName;
        this.fn = fn;
    }

    performAction(value: any) {
        this.fn.call(value)
    }
}