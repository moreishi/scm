sap.ui.controller("sap.ui.scm.view.SO_Nav", {

    to: function(_pageId) {        
        var app = this.getView().getParent().getParent();
        app.toDetail(_pageId)
        // app.to(_pageId);
        // alert();        
        // alert(this.getView().getParent().getParent().toDetail("SCM_SO_New");
    }

});