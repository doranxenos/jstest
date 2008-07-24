JSTest.Result = function(viewer) {
	this.results = [];
	this.viewer(viewer);
};

JSTest.Result.prototype = {

	results: null,
	_viewer: null,

	add: function(test, pass, message) {
		this.results.push({ test: test, pass: pass, message: message});

		if(this.viewer())
			this.viewer().displayTestResult(test, pass, message);
	},

	viewer: function(v) {
		if(v instanceof JSTest.Viewer)
			this._viewer = v;
		return this._viewer;
	}

};