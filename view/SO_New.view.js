sap.ui.jsview("sap.ui.scm.view.SO_New", {

    getControllerName: function () {
        return "sap.ui.scm.view.SO_New";
    },
    
    createContent: function (oController) {
        
        this.setDisplayBlock(true);


        var lo_page = new sap.m.Page({
            customHeader: new sap.m.Bar({
                // contentLeft: [ new sap.m.Button({icon: "sap-icon://nav-back", press: function() { oController.to("SCM_CUSTOMER"); } }) ],
                contentMiddle: [ new sap.m.Label({text: "Sales Order"}) ],
                contentRight: [ new sap.m.Button({icon: "sap-icon://home"}) ],
            }),
            content: [
                new sap.m.ObjectHeader({ 
                    title: "New Sales Order", 
                    number: "100001", 
                    numberUnit: "ID",
                    attributes: [ new sap.m.ObjectAttribute({text: "Caesar Ian Belza", active: true, design: sap.m.LabelDesign.Standard }) ],
                    statuses: [ new sap.m.ObjectStatus({text: "June 28, 2014"}) ]
                })
            ],
            footer: new sap.m.Bar({
                contentLeft: [ new sap.m.Button({text: "View Customer SO", press: function() { oController.to("SCM_CUSTOMER"); } }) ],
                contentMiddle: [],
                contentRight: []
            })

        });

        return lo_page;
    }
});