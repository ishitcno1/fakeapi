var express = require('express');
var os = require('os');
var template = require('ejs');
var logger = require('morgan');
var route = require('./route');

var app = express();
app.use(logger('combined'));

var ip; 
var nis = os.networkInterfaces();
Object.keys(nis).some(function (niname) {
   nis[niname].forEach(function (ni) {
        if ('IPv4' === ni.family && ni.internal === false) {
            ip = ni.address;
        }
   });
   return ip;
});
if (!ip) {
    ip = '127.0.0.1';
}

var port = process.env.PORT || 6620

// config
app.engine('.html', template.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

route(app);

app.listen(port, ip);
console.log('Listening on ' + ip + ':' + port);
