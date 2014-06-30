sap.ui.jsview("sap.ui.scm.view.SO_List", {

    getControllerName: function () {
        return "sap.ui.scm.view.SO_List";
    },
    
    createContent: function (oController) {
        
        this.setDisplayBlock(true);

        var lo_table = new sap.m.Table({});
        lo_table.setHeaderText("Items (0)");

        var lo_page = new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft: [ new sap.m.Button({icon: "sap-icon://nav-back", press: function() { oController.to("SCM_CUSTOMER"); } }) ],
                contentMiddle: [ new sap.m.Label({text: "Sales Order"}) ],
                contentRight: [ new sap.m.Button({icon: "sap-icon://home"}) ],
            }),
            content: [
                new sap.m.ObjectHeader({ 
                    title: "Caesar Ian Belza", 
                    number: "100001", 
                    numberUnit: "ID",
                    attributes: [ new sap.m.ObjectAttribute({text: "Liloan, Cebu", active: true, design: sap.m.LabelDesign.Standard }) ]
                }),
                lo_table
            ],
            footer: new sap.m.Bar({
                contentLeft: [],
                contentMiddle: [],
                contentRight: []
            })

        });

        return lo_page;
    }
});