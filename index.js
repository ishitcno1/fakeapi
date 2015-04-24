var express = require('express');
var os = require('os');
var template = require('ejs');
var route = require('./route');

var app = express();

var ip = '127.0.0.1';
os.networkInterfaces().wlan0.forEach(function(ni) {
  if (ni.family === 'IPv4')
    ip = ni.address;
  })
var port = process.env.PORT || 8877

// config
app.engine('.html', template.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

route(app);

app.listen(port, ip);
console.log('Listening on ' + ip + ':' + port);
