var JSTest = {

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

	getDomNode: function() {
		if(!JSTest.domNode) {
			JSTest.domNode = document.createElement('div');
			document.body.appendChild(JSTest.domNode);
		}
		return JSTest.domNode;
	}

};
