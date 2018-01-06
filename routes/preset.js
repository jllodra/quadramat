var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var sanitizeHtml = require('sanitize-html');

var config = require('../config');

router.get('/all', function(req, res, next) {
    mongo.connect(config.mongoUrl, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to mongodb server.");

        var presetsCol = db.collection('presets');
        
        presetsCol.find().sort({"autor.nom" : 1, "nom": 1}).toArray(function(err, presets) {
            assert.equal(null, err);
            presets.map(function(p) {
                if(p.autor.email != req.session.email) {
                    delete p.autor.email;
                }
                return p;
            });
            db.close();
            res.json(presets);
        });

    });
});

router.post('/update', function(req, res, next) {
    var loggedInAndOwnPreset = (
        req.session.email != null &&
        req.session.name != null &&
        req.session.email === req.body.autor.email
    );

    req.body.nom = sanitizeHtml(req.body.nom);
    if(!loggedInAndOwnPreset) {
        return res.status(500).json({
            "error": "Operation not permitted."
        });
    } else if(req.body.nom === "" || req.body.nom == null) {
        return res.status(500).json({
            "error": "Name empty or not valid."
        });
    } else {
        mongo.connect(config.mongoUrl, function (err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to mongodb server.");

            var presetsCol = db.collection('presets');
            var _id = req.body._id;
            delete req.body._id;
            presetsCol.updateOne({_id: ObjectID(_id)}, {$set: req.body}, function (err, result) {
                assert.equal(null, err);
                presetsCol.find().sort({"autor.nom" : 1, "nom": 1}).toArray(function (err, presets) {
                    assert.equal(null, err);
                    db.close();
                    res.json(presets);
                });
            });
        });
    }
});

router.post('/delete', function(req, res, next) {
    var loggedInAndOwnPreset = (
        req.session.email != null &&
        req.session.name != null &&
        req.session.email === req.body.email
    );
    
    if(!loggedInAndOwnPreset) {
        return res.status(500).json({
            "error": "Operation not permitted."
        });
    } else {
        mongo.connect(config.mongoUrl, function (err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to mongodb server.");

            var presetsCol = db.collection('presets');
            var _id = req.body._id;
            presetsCol.deleteOne({_id: ObjectID(_id)}, function (err, result) {
                assert.equal(null, err);
                presetsCol.find().sort({"autor.nom" : 1, "nom": 1}).toArray(function (err, presets) {
                    assert.equal(null, err);
                    db.close();
                    res.json(presets);
                });
            });
        });
    }
});


router.post('/save', function(req, res, next) {
    var loggedInAndOwnPreset = (
        req.session.email != null &&
        req.session.name != null &&
        req.session.email === req.body.autor.email
    );

    req.body.nom = sanitizeHtml(req.body.nom);
    if(!loggedInAndOwnPreset) {
        return res.status(500).json({
            "error": "Operation not permitted."
        });
    } else if(req.body.nom === "" || req.body.nom == null) {
        return res.status(500).json({
            "error": "Name empty or not valid."
        });
    } else {
        mongo.connect(config.mongoUrl, function (err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to mongodb server.");

            var presetsCol = db.collection('presets');

            presetsCol.insertOne(req.body, function (err, result) {
                assert.equal(null, err);
                presetsCol.find().sort({"autor.nom" : 1, "nom": 1}).toArray(function (err, presets) {
                    assert.equal(null, err);
                    db.close();
                    res.json(presets);
                });
            });

        });
    }
});

module.exports = router;
