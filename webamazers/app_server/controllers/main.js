var registeredUsers = [{ username: "admin@admin.com", password: "admin" }, { username: "ashish@gmail.com", password: "1234" }, { username: "a@g.co", password: "1" }];
var schemaWebsite = require('../model/websitesSchema')
var userSchema = require('../model/user');

module.exports.get_websites = function(req, res) {
    var q = schemaWebsite.find().limit(10);
    q.exec(function(err, webs) {
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
        return res.send({ msg: "inserted Successfully" });
    })

}

module.exports.edit_db_data = function(req, res) {
    var data = new schemaWebsite(req.body)
    console.log(req.body)
    var q = schemaWebsite.replaceOne({ _id: data._id }, data)
    q.exec(function(err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send({ msg: "succesfully saved" });
    });
}

module.exports.delete_DB = function(req, res) {
    var q = schemaWebsite.remove({ _id: req.body._id })
    console.log(req.body)
    q.exec(function(err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send({ msg: "deleted successfully" });
    });
}
module.exports.search_DB = function(req, res) {
    console.log(req.query)
    schemaWebsite.find({ Website: req.query.websiteName }, function(err, response) {
        res.render('searchResults', { websites: response });
    })
}

module.exports.get_dashboard_data = function(req, res) {
    var q = schemaWebsite.find().select({ "Website": 1, "Country_Rank": 1, "_id": 0 }).limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    })
}

module.exports.get_dashboard_graph1 = function(req, res) {
    //var us_rows = schemaWebsite.find({ country: 'United States' });
    var q = schemaWebsite.find({ country: { $in: ['United States'] } }).select({ "Website": 1, "Avg_Daily_Pageviews": 1, "_id": 0 }).limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    })
}
module.exports.get_dashboard_graph2 = function(req, res) {
    //var us_rows = schemaWebsite.find({ country: 'United States' });
    var q = schemaWebsite.find({ country: { $in: ['United States'] } }).select({ "Website": 1, "Avg_Daily_Visitors": 1, "_id": 0 }).limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    })
}


module.exports.get_dashboardbar = function(req, res) {
    var q = schemaWebsite.aggregate([
        { $match: { 'country': "United States" } },

        {
            $project: {
                _id: "$Website",
                'Social reference': { $add: ["$Facebook_likes", "$Twitter_mentions", "$Google_Pluses", "$Linkedin_Links", "$Pinterest_Pins"] }
            }
        },
        { $limit: 5 },
        { $sort: { "Social reference": -1 } }
    ])
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    })
}

module.exports.get_dashboard_social = function(req, res) {
    var q = schemaWebsite.find({ country: { $in: ['United States'] }, Website: { $in: ['www.youtube.com', 'www.google.com'] } }).select({ "Website": 1, "Facebook_likes": 1, "Twitter_mentions": 1, "Linkedin_Links": 1, "_id": 0 }).limit(3);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    })
}

module.exports.get_dashboard_top_countries = function(req, res) {


    var q = schemaWebsite.aggregate([
        { $group: { _id: '$Location', Total_Views: { $sum: '$Avg_Daily_Pageviews' } } }, { $sort: { Total_Views: -1 } }, { $limit: 5 }
    ])
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    })

}

module.exports.get_dashboard = function(req, res) {
    res.render('dashboard')
}