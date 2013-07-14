var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(20);

app.get('/', function(request, response) {
  	fs.readFileSync(buffer,"index.html");
	response.send(Buffer.toString(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
