/*global QUnit*/

sap.ui.define([
	"shell/test_push2/controller/View1.controller"
], function (oController) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});