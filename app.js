
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mysql = require('mysql');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
	console.log("Hello World");
	res.sendfile("./views/index.html");
});

app.get('/users/login', function(req, res) {
	res.sendfile("./views/login.html");
});

app.get('/users/signup', function(req, res) {
	res.sendfile("./views/signup.html");
});

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'nyles',
  password : 'secret',
  database: 'nyles'
});

app.get('/users', function(req, res) {
	var query = "SELECT `username` FROM `users`";
	
	db.query(query, function(err, rows){
		var text = rows;
		res.send(JSON.stringify(text));
	});
});

app.post('/users/signup', function(req, res) {
	var body = JSON.stringify(req.body);
	var query = "INSERT INTO `users` (`username`, `password`) VALUES (";
	query += '"' + req.body.username + '", "' + req.body.password + '");';
	
	db.query(query, function(err, rows) {
		var text = err || rows;
		res.send(text);
	});
});

app.post('/users/login', function(req, res) {
	var query = 'SELECT `password` FROM `users` WHERE `username`="' + req.body.username + '"';
	
	db.query(query, function(err, rows) {
		if(err)
		{
			res.send(err + query);
		}
		var pw = rows[0].password;
		if(pw == req.body.password)
		{
			res.send("The password matches!");
		}
		else
		{
			res.send("Wrong pw: " + JSON.stringify(pw));
		}
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
