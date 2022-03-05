export default class Renderer {
    render ( DOM : string, parent: Node = parent = document.getElementById("root")) : void {
        
        try {
            // Turn string to DOM if not already DOM
            let parser = new DOMParser();

            element = parser.parseFromString(DOM, "text/html").body.childNodes[0];

            parent.innerHTML = "";
            parent.appendChild(element);
            
        } catch(error) {
            console.warn("Error rendering", error);
        }
    
    }
}