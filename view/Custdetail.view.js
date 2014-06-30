sap.ui.jsview("sap.ui.scm.view.Custdetail", {

    getControllerName: function () {
        return "sap.ui.scm.view.Custdetail";
    },
    
    createContent: function (oController) {
        
        this.setDisplayBlock(true);

        var lo_page = new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft: [ new sap.m.Button({icon: "sap-icon://nav-back", press: function() { oController.handleNavBack() } }) ],
                contentMiddle: [ new sap.m.Label({text: "Customer Detail"}) ],
                contentRight: [ new sap.m.Button({icon: "sap-icon://Home"}) ],
            }),
            content: [],
            footer: new sap.m.Bar({
                contentLeft: [],
                contentMiddle: [],
                contentRight: []
            })

        });

        return lo_page;
    }
});