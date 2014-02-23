/**
* Tests for user.js
*/

var User = require('../routes/user.js');
var should = require('should');

describe("User object", function() {
	describe("Initialization", function() {
		it("should create an instance of User", function() {
			var user = new User();
			user.should.be.an.instanceOf(User);
		});
		it("should access the User's first name", function() {
			var user = new User();
			var firstNameType = typeof user.firstName();
			firstNameType.should.equal('string');
		});
		it("should access the User's second name", function() {
			var user = new User();
			var lastNameType = typeof user.lastName;
			lastNameType.should.equal('string');
		});
	});
});