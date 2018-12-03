var registeredUsers = [
    { username: "admin@admin.com", password: "admin" },
    { username: "ashish@gmail.com", password: "1234" },
    { username: "a@g.co", password: "1" }
];
var schemaWebsite = require("../model/websitesSchema");
var userSchema = require("../model/user");

var generalWebsitesSchema = require("../model/webSchemaAll").allWebsitesSchema;
var eduWebsitesSchema = require("../model/webSchemaAll").educationSchema;
var carRentalsSchema = require("../model/webSchemaAll").carRentalsSchema;
var moviesSchema = require("../model/webSchemaAll").moviesSchema;
module.exports.test = function(req, res) {
    var q = allWebsitesSchema.find().limit(10);
    q.exec(function(err, webs) {
        if (err) {
            res.send(err);
        }
        res.send({ title: "Express", websites: webs });
    });
}

module.exports.index = function(req, res) {
    res.render("home", { title: "Website Data" });
};

module.exports.signup = function(req, res) {
    res.render("signup", { title: "Website Data" });
};

module.exports.login = function(req, res) {
    res.render("login", { title: "Website Data" });
};

module.exports.get_websites = function(req, res) {
    var q = schemaWebsite.find().limit(10);
    q.exec(function(err, webs) {
        res.render("websites", { title: "Express", websites: webs });
    });
};

module.exports.get_add_new_from = function(req, res) {
    return res.send({
        body: "<ul>" +
            '<li>Website Name:<input id="website" type="text" name="Website"></li>' +
            '<li>Website Country Rank:<input id="country_rank" min="1" type="number" name="Website"></li>' +
            '<li>Safety Rating:<input id="safety" type="text" name="Website"></li>' +
            '<li>trustworthiness Rating:<input id="trust" type="text" name="Website"></li>' +
            '<li>Average Daily Pageviews:<input id="pageviews" min="1" type="number" name="Website"></li>' +
            '<li>Privacy Rating:<input id="privacy" type="text" name="Website"></li>' +
            "</ul>"
    });
};

module.exports.get_websites_by_id = function(req, res) {
    console.log(req.params.id);
    var q = schemaWebsite.find({ _id: req.params.id }).limit(10);
    q.exec(function(err, webs) {
        console.log(webs);
        return res.send({ websites: webs });
    });
};

module.exports.get_websites_by_id_for_edit = function(req, res) {
    console.log(req.params.id)
    var q = schemaWebsite.find({ _id: req.params.id }).limit(10);
    q.exec(function(err, webs) {
        console.log(webs)
        return res.send({ websites: webs });
    })
};
module.exports.get_childsafety = function(req, res) {
    var q = schemaWebsite.aggregate([{
            $match: { Child_Safety: "Excellent", country: "United States" }
        },
        {
            $group: { _id: "$country", total: { $sum: 1 } }
        }
    ]);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};
module.exports.get_privacy = function(req, res) {
    var q = schemaWebsite.aggregate([{
            $match: { Privacy: "Excellent", country: "United States" }
        },
        {
            $group: { _id: "$country", total: { $sum: 1 } }
        }
    ]);
    q.exec(function(err, webs) {
        console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_all_us = function(req, res) {
    var q = schemaWebsite.aggregate([{
            $match: { country: "United States" }
        },
        {
            $group: { _id: "$country", us_all: { $sum: 1 } }
        }
    ]);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};

module.exports.get_website_with_ID = function(req, res) {
    var id = req.id;
    schemaWebsite.find({}, function(err, webs) {
        return res.render("websites", { title: "Express", websites: webs });
    });
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
    };
    console.log(req.body);
    var webData = new schemaWebsite(WebsiteData);
    webData.save(function(err, data) {
        if (err) {
            console.log(err)
            return res.send(500, { error: err });
        }
        return res.send({ msg: "inserted Successfully" });
    });
};

module.exports.edit_db_data_id = function(req, res) {
    var data = new schemaWebsite(req.body);
    console.log(req.body);
    var q = schemaWebsite.replaceOne({ _id: data._id }, data);
    q.exec(function(err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send({ msg: "succesfully saved" });
    });
};

module.exports.delete_DB = function(req, res) {
    var q = schemaWebsite.remove({ _id: req.params.id });
    console.log(req.body);
    q.exec(function(err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send({ msg: "deleted successfully" });
    });
};
module.exports.search_DB = function(req, res) {
    console.log(req.query);
    schemaWebsite.find({ Website: req.query.websiteName }, function(
        err,
        response
    ) {
        res.render("searchResults", { websites: response });
    });
};
/*
module.exports.get_dashboard_data = function(req, res) {
    var q = schemaWebsite
        .find()
        .select({ Website: 1, Country_Rank: 1, _id: 0 })
        .limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};*/
module.exports.get_dashboard_data = function(req, res) {
    var q = carRentalsSchema
        .find()
        .select({ Domain: 1, Bounce_Rate: 1, _id: 0 })
        .limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_graph1 = function(req, res) {
    //var us_rows = schemaWebsite.find({ country: 'United States' });
    var q = schemaWebsite
        .find({ country: { $in: ["United States"] } })
        .select({ Website: 1, Avg_Daily_Pageviews: 1, _id: 0 })
        .limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};
module.exports.get_dashboard_graph2 = function(req, res) {
    //var us_rows = schemaWebsite.find({ country: 'United States' });
    var q = schemaWebsite
        .find({ country: { $in: ["United States"] } })
        .select({ Website: 1, Avg_Daily_Visitors: 1, _id: 0 })
        .limit(5);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboardbar = function(req, res) {
    var q = schemaWebsite.aggregate([
        { $match: { country: "United States" } },

        {
            $project: {
                _id: "$Website",
                "Social reference": {
                    $add: [
                        "$Facebook_likes",
                        "$Twitter_mentions",
                        "$Google_Pluses",
                        "$Linkedin_Links",
                        "$Pinterest_Pins"
                    ]
                }
            }
        },
        { $limit: 5 },
        { $sort: { "Social reference": -1 } }
    ]);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_newuser = function(req, res) {
    var q = carRentalsSchema.find({}, { Domain: 1, Unique_Users: 1, _id: 0 }, { $sort: { "Traffic_Share": -1 } }).limit(5);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_allcategories_stackedchart = function(req, res) {
    var q = generalWebsitesSchema.find({}, { "Domain": 1, "Unique_Users": 1, "_id": 0 }).sort({ "Unique_Users": -1 }).limit(20);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_allcategories_bouncestack = function(req, res) {
    var q = generalWebsitesSchema.aggregate([{
        $project: {
            Domain: 1,
            Avg_Month_Visits: 1,

            _id: 0,

            Bouncing_Visits: {
                $multiply: [
                    "$Bounce_Rate", "$Avg_Month_Visits"
                ]
            }

        }

    }]);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_allcategories_stackedchart_mobdesk_all = function(req, res) {
    var q = generalWebsitesSchema.find({}, { "Domain": 1, "Desktop_Share": 1, "Mobile_Share": 1, "_id": 0 }).sort({ "Traffic_Share": -1 });
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_edu_mobdesk = function(req, res) {
    var q = eduWebsitesSchema.find({}, { "Domain": 1, "Desktop_Share": 1, "Mobile_Share": 1, "_id": 0 }).sort({ "Rank": 1 }).limit(10);;
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_allcategories_timetraffic_all = function(req, res) {
    var q = generalWebsitesSchema.find({}, { "Domain": 1, "Avg_Visit_Duration": 1, "Pages_Per_Visit": 1, "_id": 0 }).sort({ "Pages_Per_Visit": -1 }).limit(20);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_allcategories_hightraffic_all = function(req, res) {
    var q = generalWebsitesSchema.aggregate([{
        $project: {
            Domain: 1,
            //                Traffic_Share: 1,
            _id: 0,

            traffic_percent: {
                $multiply: [
                    "$Traffic_Share", 100
                ]
            }

        }

    }]).sort({ traffic_percent: -1 }).limit(20);
    q.exec(function(err, webs) {
        //    console.log(webs);
        return res.send({ webs: webs });
    });
};
module.exports.get_allcategories_change_in_traffic = function(req, res) {
    var q = generalWebsitesSchema.aggregate([
        { $match: { $or: [{ Domain: "facebook.com" }, { Domain: "youtube.com" }, { Domain: "instagram.com" }, { Domain: "twitter.com" }, { Domain: "reddit.com" }, { Domain: "whatsapp.com" }, { Domain: "pinterest.com" }] } },
        {
            $project: {
                Domain: 1,
                _id: 0,

                increase_from_lastmonth: {
                    $multiply: ["$Website_Change", 100]
                }


            }
        }
    ]).sort({ Avg_Month_Visits: -1 }).limit(20);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_allcategories_social_avg_monthly = function(req, res) {
    var q = generalWebsitesSchema.aggregate([
        { $match: { $or: [{ Domain: "facebook.com" }, { Domain: "youtube.com" }, { Domain: "instagram.com" }, { Domain: "twitter.com" }, { Domain: "reddit.com" }, { Domain: "whatsapp.com" }, { Domain: "pinterest.com" }] } },
        {
            $project: {
                Domain: 1,
                _id: 0,
                Avg_Month_Visits: 1
            }

        }
    ]).sort({ Avg_Month_Visits: -1 }).limit(20);
    q.exec(function(err, webs) {
        //   console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_bouncerate_edu = function(req, res) {
    var q = eduWebsitesSchema.find({}, {
        Domain: 1,
        Bounce_Rate: 1,
        _id: 0

    }).sort({ Bounce_Rate: 1 }).limit(20);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_avg_monthly_visits = function(req, res) {
    var q = eduWebsitesSchema.find({}, {
        Domain: 1,
        Avg_Month_Visits: 1,
        _id: 0

    }).sort({ Avg_Month_Visits: -1 }).limit(10);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};



module.exports.get_dashboard_top_countries = function(req, res) {
    var q = schemaWebsite.aggregate([{
            $group: {
                _id: "$Location",
                Total_Views: { $sum: "$Avg_Daily_Pageviews" }
            }
        },
        { $sort: { Total_Views: -1 } },
        { $limit: 5 }
    ]);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard = function(req, res) {
    res.render("dashboard");
};
module.exports.get_dashboardOld = function(req, res) {
    res.render("dashboardOld");
};
module.exports.get_allcategories = function(req, res) {
    res.render("allcategories")
}

module.exports.get_movies = function(req, res) {
    res.render("movies");
}

module.exports.get_traffic_share = function(req, res) {
    var q = moviesSchema.find({ "Adsense": true }, {
            Domain: 1,
            Traffic_Share: 1,
            _id: 0
        }).sort({ "Traffic_Share": -1 })
        .limit(10);
    q.exec(function(err, webs) {
        return res.send({ webs: webs });
    });
}

module.exports.get_dashboard_bouncerate_movies = function(req, res) {
    var q = moviesSchema.find({}, {
        Domain: 1,
        Bounce_Rate: 1,
        _id: 0

    }).sort({ Bounce_Rate: 1 }).limit(20);
    q.exec(function(err, webs) {
        // console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_newuser_movies = function(req, res) {
    var q = moviesSchema.find({}, { Domain: 1, Unique_Users: 1, _id: 0 })
        .sort({ "Unique_Users": -1 })
        .limit(10);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};

module.exports.get_dashboard_website_change_movies = function(req, res) {
    var q = moviesSchema.find({}, { Domain: 1, Website_Change: 1, _id: 0 })
        .sort({ "Website_Change": -1 })
        .limit(10);
    q.exec(function(err, webs) {
        //console.log(webs);
        return res.send({ webs: webs });
    });
};