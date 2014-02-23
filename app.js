
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

app.get('/login', function(req, res) {
	res.sendfile("./views/login.html");
});

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'nyles',
  password : 'secret'
});

app.post('/users/login', function(req, res) {
	var body = JSON.stringify(req.body);
	var query = "SELECT *";
	
	db.query(query, function(err, rows) {
		var text = err | rows;
		res.send(text);
	});
	
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
