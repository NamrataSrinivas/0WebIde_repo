/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"shell/test_push2/test/unit/AllTests"
=======
		"com/shell/testPush/test/unit/AllTests"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});