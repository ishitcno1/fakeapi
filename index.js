var express = require('express');
var os = require('os');
var template = require('ejs');
var logger = require('morgan');
var route = require('./route');

var app = express();
app.use(logger('combined'));

var ip = '127.0.0.1';
if (os.networkInterfaces().eth0) {
    os.networkInterfaces().eth0.forEach(function(ni) {
        if (ni.family === 'IPv4')
            ip = ni.address;
    });
}
if (os.networkInterfaces().wlan0) {
    os.networkInterfaces().wlan0.forEach(function(ni) {
        if (ni.family === 'IPv4')
            ip = ni.address;
    });
}
if (os.networkInterfaces().ppp0) {
    os.networkInterfaces().ppp0.forEach(function(ni) {
        if (ni.family === 'IPv4')
            ip = ni.address;
    });
}
if (os.networkInterfaces().en0) {
    os.networkInterfaces().en0.forEach(function(ni) {
        if (ni.family === 'IPv4')
            ip = ni.address;
    });
}
var port = process.env.PORT || 6620

// config
app.engine('.html', template.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

route(app);

app.listen(port, ip);
console.log('Listening on ' + ip + ':' + port);
