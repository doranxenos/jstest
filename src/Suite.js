JSTest.Suite = function(name, tests, options) {
	options = options ? options : {};
	this._tests = [];

	this.name(name);
	this.tests(tests);

	this._buildUp = options.buildUp;
	this._tearDown = options.tearDown;
};

JSTest.Suite.prototype = {

	_name: null,
	_tests: null,

	name: function(n) {
		if(typeof n == 'string')
			this._name = n;
		return this._name;
	},

	tests: function(tests) {
		if(tests instanceof Array)
			this._tests = tests;
		return this._tests;
	},

	run: function() {
		var t = this.tests();
		var result = new JSTest.Result();

		JSTest.viewer().printSuiteHeader(this);

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

		JSTest.viewer().printSummary(result);

		return result;
	}

};