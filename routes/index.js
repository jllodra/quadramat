var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var loggedIn = (req.session.email != null && req.session.name != null);

    res.render('index', {
        title: 'Sintetitzador',
        alreadyLoggedIn: loggedIn
    });
});

module.exports = router;
