require('dotenv').config();
var PORT = process.env.PORT;
var express = require('express');
var app = express();

app.listen(PORT, function() {
	console.log('Server running, port ${PORT}`');
});

app.get('/', function(request, response) {
	response.send('Hello friend');
});
