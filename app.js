// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
	res.sendFile('taketwo.html', {root:'./public'})
});

//GETS

app.get('/about', function (req, res) {
	res.sendFile('about.html', {root: './public'})
});

app.get('/resume', function (req, res) {
	res.sendFile('resume.html', {root:'./public'})
});

// app.get('/michaelResume', function (req, res) {
// 	res.sendFile('michaelHoffmanResume.pdf' {root:'/'})
// });

app.get('/media', function (req, res) {
	res.sendFile('media.html', {root:'./public'})
});

app.get('/contact', function (req, res) {
	res.sendFile('contact.html', {root:'./public'})
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});