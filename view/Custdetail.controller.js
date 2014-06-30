sap.ui.controller("sap.ui.scm.view.Custdetail", {

    handleNavBack: function(oEvt) { 
        var app = this.getView().getParent();
        app.back();
    }

});