var express = require('express');
var app = express();

app.listen(3000, function() {
	console.log('Server running, port 3000');
});

app.get('/', function(request, response) {
	response.send('Hello friend');
});