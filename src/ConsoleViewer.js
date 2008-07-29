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
};

JSTest.ConsoleViewer.prototype.displayTestResult = function(test, pass, message) {
	if(pass) {
			console.debug("Passed Test "+test.name + (message ? ": "+message : ""));
		} else {
			console.error("Failed Test "+test.name + (message ? ": "+message : ""));
		}
};

JSTest.ConsoleViewer.prototype.printJSTestSummary = function() {
	console.debug(" ");
	console.debug("Finished running "+ JSTest.suites().length +" Test Suites:");
	var msg = "Failed "+this._failCnt+" suites, Passed "+this._passCnt+" suites";

	if(this._failCnt)
		console.error(msg);
	else
		console.debug(msg);
};

JSTest.ConsoleViewer.prototype.printSuiteSummary = function(result) {
	console.debug("--------------------------------------------------------");
	var msg = "Failed "+result.failCnt+" tests, Passed "+result.passCnt+" tests";

	if(result.failCnt) {
		this._failCnt++;
		console.error(msg);
	} else {
		this._passCnt++;
		console.debug(msg);
	}

	console.debug("--------------------------------------------------------");
};

