import StoredValue from "./StoredValue";
import TemplateEngine from "./TemplateEngine";
import Watcher from "./Watcher";

class Canyon {
    
    storage: StoredValue[];
    templateEngine: TemplateEngine;

    constructor() {
        this.storage = [];
        this.templateEngine = new TemplateEngine();
    }

    addField(bind: any, defaultValue: any) : void {
        this.storage.push(new StoredValue())
    }

    addWatcher(fieldName: string, fn: any) : void {
        const watcher = new Watcher(fieldName, fn);
        this.storage.forEeach(storedValue => {
            if(storedValue.bind === fieldname){
                storedValue.watchers.push(watcher)
            }
        })
    }

    addAction(bind: string, listeners: any, fn: any) : void {
        const binds : Node[] = document.querySelectorAll(
            `[data-action*="${bind}"]`,
            `[data-action^="${bind}"]`
        );

        binds.forEach(element => {
            element.addEventListener(listener, fn);
        });
    }

    render(template : Node, parent : Node = document.getElementById("root")) {
        try {
            // Check if template is a DOM node, if so, attach it to the set target
            if (template instanceof Node) {
              parent.innerHTML = "";
              parent.appendChild(template);
            }
          } catch(error) {
            console.warn("Error rendering", error)
          }
    }

}

module.export = new Canyon();