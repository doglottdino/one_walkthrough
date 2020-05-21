sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	/*XMLView.create({
		viewName: "one_walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});*/

	new ComponentContainer({
		name: "one_walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});