var fs = require('fs');

var config = {};

if(fs.existsSync('./local.js')) {
    config = require('./local');
} else {
    config.mongoUrl = process.env.mongoUrl;
    config.invitationCode = process.env.invitationCode;
	// si tenim més variables de heroku, les posarem aquí:
	// ...
};

module.exports = config;
