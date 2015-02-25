var express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 8080;

app.use(express.static('.'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.listen(port);
console.log('App is on http://localhost:' + port + ' yo!');