var fs = require('fs');
var requireDir = require('require-dir');

module.exports = function(app) {
    var routes = [];
    var models = requireDir('./models');
    for (model in models) {
        routes.push(model);
        app.get('/' + model, function(req, res) {
            res.json(models[req.path.slice(1)]);
        });
    }

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
