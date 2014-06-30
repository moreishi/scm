sap.ui.jsview("sap.ui.scm.view.SO_Nav", {

    getControllerName: function () {
        return "sap.ui.scm.view.SO_Nav";
    },
    
    createContent: function (oController) {
        
        this.setDisplayBlock(true);

        var lo_page = new sap.m.Page({
            customHeader: new sap.m.Bar({
                // contentLeft: [  ],
                contentMiddle: [ new sap.m.Label({text: "Navigation"}) ],
                // contentRight: [ new sap.m.Button({}) ]
            }),
            content: [
                // new sap.m.List({items: [ new sap.m.ObjectListItem({ title: "View Sales Orders", type: "Active", press: function(oEvt) {
                //     oController.to("SCM_SO_List");
                // } }) ]}),
                new sap.m.List({items: [ new sap.m.ObjectListItem({ title: "Create New Sales Order", type: "Active", press: function(oEvt) {
                    oController.to("SCM_SO_New");
                } }) ]}),
            ]
            // footer: new sap.m.Bar({
                // contentLeft: [  ],
                // contentMiddle: [  ],
                // contentRight: [ new sap.m.Button({}) ]
            // })
        });

        return lo_page;
        
    }
});