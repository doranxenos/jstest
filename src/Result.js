JSTest.Result = function() {
	this.results = [];
};

JSTest.Result.prototype = {

	results: null,
	passCnt: 0,
	failCnt: 0,

	add: function(test, pass, message) {
		this.results.push({ test: test, pass: pass, message: message});

		if(pass)
			this.passCnt++;
		else
			this.failCnt++;

		JSTest.viewer().displayTestResult(test, pass, message);
	}

};