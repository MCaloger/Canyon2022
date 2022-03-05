export default class TemplateEngine {

    // Helper function to check tree for actions
    private checktreeForActions(tree) {
        if (tree) {
            checkElementForActions(tree);
            tree.childNodes.forEach((child) => {
                checkElementForActions(child);
                if (child.hasChildNodes) {
                  checkTreeForActions(child);
                }
            });
        }
    }

    // Helper function called by checktreeForActions() to check for actions on specific elements
    private checkElementForActions(element : Element) {
      if (element && element.hasAttribute) {
        if (element.hasAttribute("data-action")) {
          const dataAction = element.getAttribute("data-action");

          const actions = dataAction.split(" ");

          actions.forEach((action) => {
            if (actions[action]) {
              actionListener(
                element,
                actions[action].listeners,
                actions[action].fn
              );
            }
          });
        }
      }
    };

    private sanitize(content : string) : string {
        let text = content.toString();
        text = text.replace(new RegExp("&", "g"), "&amp;");
        text = text.replace(new RegExp("<", "g"), "&lt;");
        text = text.replace(new RegExp(">", "g"), "&gt;");
        text = text.replace(new RegExp("'", "g"), "&#39;");
        text = text.replace(new RegExp('"', "g"), "&quot;");
        return text;
    }

    private checkifDom(element: Node) : boolean {
        return element instanceof Element
    }

    // private checkIfCanyonComponent(element: Node) : boolean {
    //   return element instanceof CanyonComponent
    // }




}