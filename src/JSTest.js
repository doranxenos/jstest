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

	run: function() {
		this.viewer().printJSTestHeader();

		var l = this._suites.length;
		for(var i=0; i<l; i++)
			this._suites[i].run();
	}

};
