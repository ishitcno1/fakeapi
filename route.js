var fs = require('fs');

module.exports = function(app) {

    var routes = [];
    fs.readdirSync('./models/').forEach(function(file) {
        var fileName = file.slice(0, -3);
        routes.push(fileName);
        var model = require('./models/' + fileName);
        app.get('/' + fileName, function(req, res) {
            res.json(model);
        });
    });

    app.get('/', function(req, res) {
        res.render('api', {
            title: 'Fake API',
            routes: routes
        });
    });

    app.post('/post', function(req, res) {
      res.status(201);
      res.end;
      // res.json({code: 1, msg: 'success'});
    });
};
