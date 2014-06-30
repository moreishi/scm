jQuery.sap.declare("sap.ui.scm.Component");

sap.ui.core.UIComponent.extend("sap.ui.scm.Component", {

    createContent : function() {

        // create root view
        var oView = sap.ui.view({
            id : "app",
            viewName : "sap.ui.scm.view.App",
            type : "JS",
            viewData : { component : this }
        });
        
        return oView;
    }
});