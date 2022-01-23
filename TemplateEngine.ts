export default class TemplateEngine {

    // Helper function to check tree for actions
    checktreeForActions(tree) {
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
    checkElementForActions(element) {
      if (element && element.hasAttribute) {
        if (element.hasAttribute("data-action")) {
          const dataAction = element.getAttribute("data-action");

          const actions = dataAction.split(" ");

          actions.forEach((action) => {
            if (this.actions[action]) {
              this.actionListener(
                element,
                this.actions[action].listeners,
                this.actions[action].fn
              );
            }
          });
        }
      }
    };

    sanitize(content) {
        const text = content.toString();
        text = text.replace(new RegExp("&", "g"), "&amp;");
        text = text.replace(new RegExp("<", "g"), "&lt;");
        text = text.replace(new RegExp(">", "g"), "&gt;");
        text = text.replace(new RegExp("'", "g"), "&#39;");
        text = text.replace(new RegExp('"', "g"), "&quot;");
        return text;
    }

    checkifDom(element) {
        return element instanceof Element
    }


}