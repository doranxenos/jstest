JSTest.Result = function() {
	this.results = [];
};

JSTest.Result.prototype = {

	results: null,

	add: function(test, pass, message) {
		this.results.push({ test: test, pass: pass, message: message});

		JSTest.viewer().displayTestResult(test, pass, message);
	}

};