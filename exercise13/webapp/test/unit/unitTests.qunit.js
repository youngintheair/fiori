/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"synce18/exercise13/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
