sap.ui.jsview("sap.ui.scm.view.App", {

    getControllerName: function () {
        return "sap.ui.scm.view.App";
    },
    
    createContent: function (oController) {
        
        // to avoid scroll bars on desktop the root view must be set to block display
        this.setDisplayBlock(true);
        
        // create app
        this.app = new sap.m.App();
        
        // load the login page
        var customer = sap.ui.jsview("SCM_CUSTOMER", "sap.ui.scm.view.Customer");
        customer.getController().nav = this.getController();
        // var custdetail = sap.ui.jsview("SCM_CUST_DETAIL", "sap.ui.scm.view.Custdetail");
        // custdetail.getController().nav = this.getController();
        // var page_so = sap.ui.jsview("SCM_SO", "sap.ui.scm.view.SO");
        // page_so.getController().nav = this.getController();

        var page_sa_so = sap.ui.jsview("SCM_SA_SO", "sap.ui.scm.view.SA_SO");
        page_sa_so.getController().nav = this.getController();


        this.app.addPage(customer, true);
        // this.app.addPage(custdetail, true);
        this.app.addPage(page_sa_so, true);
        
        return this.app;
    }

});