require('dotenv').config();
var PORT = process.env.PORT;
var express = require('express');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = 'mongodb://127.0.0.1:27017/ng'

app.listen(PORT, function() {
	console.log(`Server running, port ${PORT}`);
});

app.get('/', function(request, response) {
	response.send('Hello friend');
});
