var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');

var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
    var loggedIn = (req.session.email != null && req.session.name != null);
    var error = (req.query.error == "1");
    
    res.render('login', {
        title: 'Login',
        alreadyLoggedIn: loggedIn,
        error: error
    });
});

router.get('/logout', function(req, res, next) {
    req.session.email = null;
    req.session.name = null;
    res.redirect('/');
});

router.post('/check', function(req, res, next) {
    // guardar usuari dins mongo
    mongo.connect(config.mongoUrl, function(err, db) {
        assert.equal(null, err);
        var usersCol = db.collection('users');
        usersCol.findOne({ email: req.body.email }, function(err, r) {
            assert.equal(null, err);
            db.close();
            if(r) {
                var email = r.email;
                var name = r.nom;
                var hashedPassword = r.password;
                bcrypt.compare(req.body.password, hashedPassword, function(err, ok) {
                    if(ok) {
                        // Passwords match
                        req.session.email = email;
                        req.session.name = name;
                        res.redirect('/');
                    } else {
                        // Passwords don't match
                        res.redirect('/login?error=1');
                    }
                });
            } else { // l'usuari no s'ha logeat correctament
                res.redirect('/login?error=1');
            }
        });
    });
});

module.exports = router;
