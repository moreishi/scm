sap.ui.controller("sap.ui.scm.view.Customer", {

    to: function(_pageId) {        
        var app = this.getView().getParent();
        app.to(_pageId);
    }

});