sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
<<<<<<< HEAD
		viewNamespace: "shell.test_push2.view.",
=======
		viewNamespace: "com.shell.testPush.view.",
>>>>>>> refs/heads/master
		autoWait: true
	});
});