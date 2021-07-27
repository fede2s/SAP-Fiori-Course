/* eslint-disable no-undef */
//@ts-nocheck
sap.ui.define([
    'sap/ui/core/Control'
],
/**
 * @param {typeof sap.ui.core.Control} Control
 */
    function (Control) {

        'use strict';

        return Control.extend("fiori_ini.SAPUI5.control.ProductRating", {

            metadata: {

                properties: {
                    value: { type: "float", defaultValue: 0 }
                },

                aggregations: {
                    _rating: {
                        type: "sap.m.RatingIndicator",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _label : {
                        type: "sap.m.Label",
                        multiple : false,
                        visibility: "hidden"
                    },
                    _button: {
                        type: "sap.m.Button",
                        multiple: false,
                        visibility: "hidden"
                    },

                    events: {
                        change : {
                            parameters : {
                                value: { type : "int" }                                
                            }
                        }
                    }
                }
            },

            init : function () {

            },

            renderer: function (oRm, oControl) {

            }
        });
    });