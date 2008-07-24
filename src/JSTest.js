var JSTest = {

	Version: 0.1,

	DefaultViewer: "ConsoleViewer",

	/*
	 * Assertions
	 */

	isNull: function(exp, suite) {
		if(exp !== null)
			throw new JSTest.Error("Not Null");
	},

	isNotNull: function(exp, suite) {
		if(exp === null)
			throw new JSTest.Error("Not Null");
	},

	isUndefined: function(exp) {
		if(exp !== undefined)
			throw new JSTest.Error("Not Undefined");
	},

	isDefined: function(exp) {
		if(exp === undefined)
			throw new JSTest.Error("Not Undefined");
	},

	isTrue: function(exp) {
		if(exp !== true)
			throw new JSTest.Error("Not True");
	},

	isFalse: function(exp) {
		if(exp !== false)
			throw new JSTest.Error("Not False");
	},

	areEqual: function(expected, actual) {
		if(expected != actual)
			throw new JSTest.Error("Not Equal");
	}

};

JSTest.Error = function() {

};
JSTest.Error.prototype = new Error;