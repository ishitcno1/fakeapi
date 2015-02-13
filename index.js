var express = require('express');
var template = require('ejs');
var route = require('./route');

var app = express();
var port = process.env.PORT || 8877

// config
app.engine('.html', template.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

route(app);

app.listen(port);
console.log('Listening on port ' + port);
