/**
* This is user
*/

var User = function() {
	var first = "";
	var last = "";
	
	this.firstName = function(name) {
		first = (typeof name === 'string') ? name : first;
		return first;
	};
	
	this.lastName = function(name) {
		last = (typeof name === 'string') ? name : last;
		return last;
	};
	
	this.fullName = function() {
		return first + " " + last;
	};
};

module.exports = User;