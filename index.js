var express = require('express');
var template = require('ejs');
var model = require('./model');

var app = express();

// config
app.engine('.html', template.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('api', {
        title: 'Fake API',
        routes: model.routes
    });
});

for (var i in model.routes) {
    var route = model.routes[i]
    app.get(route, function(req, res) {
        res.json(model[req.path.replace('/', '')]);
    });
}

app.listen(8877);
console.log('Listening on port 8877');
