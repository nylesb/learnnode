/**
* Tests for user.js
*/

var user = require('../routes/user');
var should = require('should');

describe("User object", function() {
	describe("Initializtion", function() {
		it("should have name property", function() {
			var type = typeof user.name;
			type.should.equal('string');
		});
	});
});