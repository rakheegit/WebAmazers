var registeredUsers = [{ username: "admin@admin.com", password: "admin" }, { username: "ashish@gmail.com", password: "1234" }, { username: "a@g.co", password: "1" }];
var schemaWebsite = require('../model/websitesSchema')
var userSchema = require('../model/user');

module.exports.get_websites = function(req, res) {
    schemaWebsite.find(function(err, webs) {
        res.render('websites', { title: 'Express', websites: webs });
    })
};

module.exports.get_website_with_ID = function(req, res) {
    var id = req.id;
    schemaWebsite.find({}, function(err, webs) {
        res.render('websites', { title: 'Express', websites: webs });
    })
};