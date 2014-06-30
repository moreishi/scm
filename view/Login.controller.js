jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("sap.ui.clinic.view.Login", {

    handleLogin: function(evt) {
        
        sap.m.MessageToast.show("Login Successful");
        this.app.to("sap.ui.clinic.view.App");
    },
    
    handleForgotPassword: function(evt) {
        
        sap.m.MessageBox.alert("Reset Password");
        
    }
    
});