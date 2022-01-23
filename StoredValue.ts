export default class StoredValue {
    value?: any;
    bind: string;
    watchers: any;

    constructor(bind: string, value: any){
        this.value = value;
        this.bind = bind;
        this.watchers = [];
    }

    getValue() : any {
        return this.value;
    }

    setValue(value : any) : void {
        this.value = value;

        const binds = document.querySelectorAll(`[data-bind="${bind}"]`);

        binds.forEach(element => {
            element.value = this.value;
            element.innerText = this.value
        })

        this.watchers.forEach(watcher => {
            watcher.performAction();
        });
    }

}