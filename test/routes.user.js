/**
* Tests for user.js
*/

var User = require('../routes/user');
var should = require('should');

describe("User object", function() {
	describe("Initialization", function() {
		it("should create an instance of User", function() {
			var user = new User();
			user.should.be.an.instanceOf(User);
		});
	});
});