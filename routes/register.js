var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var bcrypt = require('bcrypt');
var sanitizeHtml = require('sanitize-html');

var config = require('../config');

router.get('/', function(req, res, next) {
    var error = (req.query.error != null ? req.query.error : null);
    
    res.render('register', { 
        title: 'User registration',
        error: error
    });
});

router.get('/welcome', function(req, res, next) {
    res.render('welcome', {
        title: 'Benvingut'
    })
});

/* POST register */
router.post('/new', function(req, res, next) {
    // crear objecte usuari
    var user = {};
    
    if(req.body.invitationCode !== config.invitationCode) {
        return res.redirect('/register?error=2');
    } else {
        user.email = sanitizeHtml(req.body.email);
        user.nom = sanitizeHtml(req.body.name);

        bcrypt.hash(req.body.password, 10, function (err, hash) {
            // Store hash in database
            user.password = hash;
            // guardar usuari dins mongo
            mongo.connect(config.mongoUrl, function (err, db) {
                assert.equal(null, err);
                var usersCol = db.collection('users');
                usersCol.findOne({$or: [{email: user.email}, {nom: user.nom}]}, function (err, r) {
                    assert.equal(null, err);
                    if (r) { // el tenim repetit
                        db.close();
                        res.redirect('/register?error=1');
                    } else {
                        usersCol.insertOne(user, function (err, r) {
                            assert.equal(null, err);
                            console.log("Usuari inserit amb exit");
                            // sessio nova:
                            req.session.email = user.email;
                            req.session.name = user.nom;
                            db.close();
                            res.redirect('/register/welcome');
                        });
                    }
                });
            });
        });
    }
});


module.exports = router;
