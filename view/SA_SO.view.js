sap.ui.jsview("sap.ui.scm.view.SA_SO", {

    getControllerName: function () {
        return "sap.ui.scm.view.SA_SO";
    },
    
    createContent: function (oController) {
        
        this.setDisplayBlock(true);

        var lo_sa = new sap.m.SplitApp({ homeIcon: new sap.m.Button({icon: "sap-icon://home"}) });

        // var customer = sap.ui.jsview("SCM_CUST_DETAIL", "sap.ui.scm.view.Custdetail");
        // customer.getController().nav = this.getController();
        var lo_page_so_nav = sap.ui.jsview("SCM_SO_NAV", "sap.ui.scm.view.SO_Nav");
        lo_page_so_nav.getController().nav = this.getController();
        var lo_page_so_list = sap.ui.jsview("SCM_SO_List", "sap.ui.scm.view.SO_List");
        lo_page_so_list.getController().nav = this.getController();
        var lo_page_so_new = sap.ui.jsview("SCM_SO_New", "sap.ui.scm.view.SO_New");
        lo_page_so_new.getController().nav = this.getController();

        lo_sa.addMasterPage(lo_page_so_nav);
        lo_sa.addDetailPage(lo_page_so_list);
        lo_sa.addDetailPage(lo_page_so_new);

        return lo_sa;
    }
});