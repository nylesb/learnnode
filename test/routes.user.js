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
		it("should access the User's second name", function() {
			var user = new User();
			var lastNameType = typeof user.lastName;
			lastNameType.should.equal('string');
		});
	});
	describe("First Name", function() {
		it("should return an empty string initiated", function() {
			var user = new User();
			var firstName = user.firstName();
			var firstNameType = typeof firstName;
			firstNameType.should.equal('string');
			firstName.should.equal("");
		});
		it("should set and get first name", function() {
			var user = new User();
			var testName = "Nyles";
			user.firstName(testName).should.equal(testName);
		});
	});
});