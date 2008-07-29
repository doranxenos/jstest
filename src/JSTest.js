var JSTest = {

	_suites: [],
	_viewer: null,

	Version: 0.1,

	DefaultViewer: "ConsoleViewer",

	/*
	 * Assertions
	 */

	isNull: function(exp, suite) {
		if(exp !== null)
			throw new Error(exp +" is not null");
	},

	isNotNull: function(exp, suite) {
		if(exp === null)
			throw new Error(exp +" is null");
	},

	isUndefined: function(exp) {
		if(exp !== undefined)
			throw new Error(exp +" is defined");
	},

	isDefined: function(exp) {
		if(exp === undefined)
			throw new Error(exp +" is undefined");
	},

	isTrue: function(exp) {
		JSTest.areEqual(true, exp);
	},

	isFalse: function(exp) {
		JSTest.areEqual(false, exp);
	},

	areEqual: function(expected, actual) {
		if(expected != actual)
			throw new Error("Expected: "+expected +", Actual: "+ actual);
	},

	/*
	 * Utility Functions
	 */

	suites: function(s) {
		if(s instanceof Array) {
			this.clear();
			for(var i=0; i<s.length; i++)
				this.register(s[i]);
		}
		return this._suites;
	},

	viewer: function(v) {
		if(v instanceof JSTest.Viewer)
			this._viewer = v;

		if(!this._viewer)
			this._viewer = new JSTest[this.DefaultViewer]();

		return this._viewer;
	},

	getDomNode: function() {
		if(!JSTest.domNode) {
			JSTest.domNode = document.createElement('div');
			document.body.appendChild(JSTest.domNode);
		}
		return JSTest.domNode;
	},

	register: function(suite) {
		this._suites.push(suite);
	},

	deregister: function(suite) {
		var l = this._suites.length;
		var idx = -1;
		for(var i=0; i<l; i++) {
			if(this._suites[i] == suite) {
				idx = i;
				break;
			}
		}
		if(idx >= 0)
			this._suites.splice(idx, 1);
	},

	clear: function() {
		while(this._suites.length)
			this.deregister(this._suites[0]);
	},

	run: function() {
		this.viewer().printJSTestHeader();

		var l = this._suites.length;
		for(var i=0; i<l; i++)
			this._suites[i].run();

		this.viewer().printJSTestSummary();
	}

};
