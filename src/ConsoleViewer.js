JSTest.ConsoleViewer = function() {
	this._passCnt = 0;
	this._failCnt = 0;
};
JSTest.ConsoleViewer.prototype = new JSTest.Viewer;

JSTest.ConsoleViewer.prototype.printJSTestHeader = function() {
	console.debug("Running registered JSTest Suites...");
};

JSTest.ConsoleViewer.prototype.printSuiteHeader = function(suite) {
	console.debug(" ");
	console.debug("--------------------------------------------------------");
	console.debug("Running Suite: "+suite.name());
	console.debug("--------------------------------------------------------");
	console.debug(" ");
};

JSTest.ConsoleViewer.prototype.displayTestResult = function(test, pass, message) {
	if(pass) {
			this._passCnt++;
			console.debug("Passed Test "+test.name + (message ? ": "+message : ""));
		} else {
			this._failCnt++;
			console.error("Failed Test "+test.name + (message ? ": "+message : ""));
		}
};

JSTest.ConsoleViewer.prototype.printSummary = function(result) {
	console.debug(" ");
	console.debug("--------------------------------------------------------");
	console.debug(" ");

	var msg = "Failed "+this._failCnt+" tests, Passed "+this._passCnt+" tests";

	if(this._failCnt) {
		console.error(msg);
	} else {
		console.debug(msg);
	}
};