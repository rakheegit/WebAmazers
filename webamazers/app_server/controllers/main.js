var registeredUsers = [{ username: "admin@admin.com", password: "admin" }, { username: "ashish@gmail.com", password: "1234" }, { username: "a@g.co", password: "1" }];
var schemaWebsite = require('../model/websitesSchema')
var userSchema = require('../model/user');

module.exports.get_websites = function(req, res) {
    var q = schemaWebsite.find().limit(10);
    q.exec(function(err, webs){
        res.render('websites', { title: 'Express', websites: webs });
    })
};

module.exports.get_website_with_ID = function(req, res) {
    var id = req.id;
    schemaWebsite.find({}, function(err, webs) {
        return res.render('websites', { title: 'Express', websites: webs });
    })
};

module.exports.post_db_data = function(req, res) {
    var data = req.body;
    var WebsiteData = {
        Website: data.website,
        Country_Rank: data.country,
        Child_Safety: data.safety,
        Trustworthiness: data.trust,
        Avg_Daily_Pageviews: data.pageview,
        Privacy: data.privacy
    }
    console.log(req.body)
    var webData = new schemaWebsite(WebsiteData)
    webData.save(function(err, data) {
        if (err) return res.send(500, { error: err });
        return res.send({msg:"inserted Successfully"});
    })
       
}

module.exports.edit_db_data = function(req, res){
    var data = new schemaWebsite(req.body)
    console.log(req.body)
    var q = schemaWebsite.replaceOne({_id:data._id}, data)
    q.exec(function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send({msg:"succesfully saved"});
    });
}

module.exports.delete_DB = function(req, res){
    var q = schemaWebsite.remove({_id:req.body._id})
    console.log(req.body)
    q.exec(function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send({msg:"deleted successfully"});
    });
}
module.exports.search_DB = function(req, res) {
    console.log(req.query)
    schemaWebsite.find({ Website: req.query.websiteName }, function(err, response) {
        res.render('searchResults', { websites: response });
    })
}
