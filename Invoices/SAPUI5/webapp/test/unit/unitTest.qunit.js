// @ts-nocheck
/* eslint-disable no-undef */
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function(){
    "use strict";

    sap.ui.require([
        "fiori_ini/SAPUI5/test/unit/AllTest"
    ], function(){
        QUnit.start();
    })
});