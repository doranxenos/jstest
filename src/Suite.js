JSTest.Suite = function(tests, options) {
	options = options ? options : {};
	this._tests = [];
	this.tests(tests);

	this._buildUp = options.buildUp;
	this._tearDown = options.tearDown;

	this.viewer(options.viewer);
};

JSTest.Suite.prototype = {

	_tests: null,
	_viewer: null,

	tests: function(tests) {
		if(tests instanceof Array)
			this._tests = tests;
		return this._tests;
	},

	viewer: function(viewer) {
		if(viewer instanceof JSTest.Viewer)
			this._viewer = viewer;
		return this._viewer;
	},

	run: function() {
		var t = this.tests();
		var result = new JSTest.Result(this.viewer());

		if(typeof this._buildUp == 'function')
			this._buildUp();

		for(var i=0; i<t.length; i++) {
			try {
				if(typeof t[i] == 'function') {
					var r = t[i].apply(this);
					result.add(t[i], true);
				}
			} catch(e) {
				result.add(t[i], false, e.message);
			}
		}

		if(typeof this._tearDown == 'function')
			this._tearDown();

		if(this.viewer() instanceof JSTest.Viewer)
			this.viewer().printSummary(result);

		return result;
	}

};