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

module.exports.post_db_data = function(req, res) {
    var WebsiteData = {
        Website: req.body.insertWebsite,
        Country_Rank: req.body.insertCountryRank,
        Child_Safety: req.body.insertChildSafety,
        Trustworthiness: req.body.insertTrustworthiness,
        Avg_Daily_Pageviews: req.body.insertAvgDailyPageviews,
        Privacy: req.body.insertPrivacy
    }
    console.log(req.body)
    var data = new schemaWebsite(WebsiteData)
    data.save(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    })
    res.send("item saved to database");
       
}

module.exports.edit_db_data = function(req, res){
    console.log(req.body);
    var query = {'_id':req.body._id};
    
    var updatedData = req.body.updatedData;
    // schemaWebsite.findOneAndUpdate(query, updatedData, {upsert:true}, function(err, doc){
    //     if (err) return res.send(500, { error: err });
    //     return res.send({msg:"succesfully saved"});
    // });
}



module.exports.search_DB = function(req, res) {
    schemaWebsite.find({ Website: req.query.websiteName }, function(err, response) {
        res.render('searchResults', { websites: response });
    })
}
