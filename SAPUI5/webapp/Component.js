// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "fiori_ini/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.Controller} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("fiori_ini.SAPUI5.Component", {

            metadata: {
                manifest : "json"
                // "rootView" : {
                //     "viewName" : "fiori_ini.SAPUI5.view.App",
                //     "type" : "XML", 
                //     "async" : true,
                //     "id" : "app"
                // }
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "fiori_ini.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

            }
        });
    });