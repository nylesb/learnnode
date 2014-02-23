/**
* This is user
*/

var User = function() {
	this.firstName = function(name) {
		if (typeof name === 'string')
		{
			return name;
		}
		return "";
	};
	this.lastName = "Breecher";
};

module.exports = User;