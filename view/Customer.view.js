sap.ui.jsview("sap.ui.scm.view.Customer", {

    getControllerName: function () {
        return "sap.ui.scm.view.Customer";
    },
    
    createContent: function (oController) {
        
        this.setDisplayBlock(true);

        var lv_data = { 
            customer: [ 
                { id: "10001", name: "Caesar Ian Belza" },
                { id: "10002", name: "Arturo Solito" },
                { id: "10003", name: "Rex Zalavaria" },
                { id: "10004", name: "Megan Fox" },
                { id: "10005", name: "Glenn Lim" },
                { id: "10006", name: "Aljhun Caputolan" },
            ]
        };

        var lo_model = new sap.ui.model.json.JSONModel();
        lo_model.setData(lv_data);
        var lo_list = new sap.m.List({});

        var lo_list_tpl = new sap.m.ObjectListItem({ 
            title: "{name}", 
            number: "{id}", 
            numberUnit: "ID", 
            press: function(oEvt) {
                oController.to("SCM_SA_SO");
            }, 
            type: "Navigation"
        });

        lo_list.setModel(lo_model);
        lo_list.bindAggregation("items", {
            path: "/customer",
            template: lo_list_tpl
        });

        var lo_page = new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentMiddle: [ new sap.m.Label({text: "Customer"}) ],
                contentLeft: [],
                contentRight: [ new sap.m.Button({icon: "sap-icon://home"}) ]
            }),
            content: [ 
                new sap.m.SearchField({}),
                lo_list
            ],
            footer: new sap.m.Bar({ 
                contentLeft: [  ], 
                contentMiddle: [  ], 
                contentRight: [  ] 
            })
        });

        return lo_page;

    }
});