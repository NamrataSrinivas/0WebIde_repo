/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"shell/test_push2/test/integration/AllJourneys"
=======
		"com/shell/testPush/test/integration/AllJourneys"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});