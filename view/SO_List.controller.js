sap.ui.controller("sap.ui.scm.view.SO_List", {

    to: function(_pageId) {        
        var app = this.getView().getParent().getParent().getParent().getParent();
        // app.to(_pageId);
        app.back();
    }
});