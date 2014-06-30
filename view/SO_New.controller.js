sap.ui.controller("sap.ui.scm.view.SO_New", {

    to: function(_pageId) {        
		var app = this.getView().getParent().getParent();
        // app.toDetail("SCM_SO_List");
        app.backDetail();
        // alert(app);
    }
});