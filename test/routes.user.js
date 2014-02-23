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
			user.firstName(testName);
			user.firstName().should.equal(testName);
		});
	});
	describe("Last Name", function() {
		it("should return an empty string initiated", function() {
			var user = new User();
			var lastName = user.lastName();
			var lastNameType = typeof lastName;
			lastNameType.should.equal('string');
			lastName.should.equal("");
		});
		it("should set and get first name", function() {
			var user = new User();
			var testName = "Nyles";
			user.lastName(testName);
			user.lastName().should.equal(testName);
		});
	});
});