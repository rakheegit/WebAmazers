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
};

module.exports.index = function(req, res) {
  res.render("home", { title: "Website Data" });
};

module.exports.logout = function(req, res) {
  console.log(req.session.user);
  if (req.session.user) {
    var name = req.session.user.username;
    req.session.destroy(function() {
      res.render("login", { message: "Login", logedin: true });
    });
  } else {
    res.send("Nobody is currently logged in!");
  }
};

module.exports.createuser = function(req, res) {
  userexists(
    req,
    function(existinguser) {
      if (existinguser.length != 0) {
        return res.send({
          msg: "Username already taken. Please try some other name.",
          type: "error"
        });
      } else {
        var user = new userSchema(req.body);
        user.save(function(err) {
          if (err) {
            return res.send(500, { error: err });
          }
          return res.send({
            msg: "Successfully signed up. Please login.",
            type: "success"
          });
        });
      }
    },
    function(err) {
      if (err) {
        return res.send(500, { error: err });
      }
    }
  );
};

function userexists(req, callback, errorcallback) {
  var q = userSchema.find({ name: req.body.name });
  q.exec(function(err, data) {
    if (err) {
      errorcallback(err);
    } else {
      callback(data);
    }
  });
}

module.exports.signup = function(req, res) {
  res.render("signup");
};

module.exports.userhome = function(req, res) {
  if (req.session.user) {
    console.log(req.session.user);
    res.render("index");
  } else {
    res.render("login", { logedin: true });
  }
};

module.exports.compare = function(req, res) {
  if (req.session.user) {
    var q = generalWebsitesSchema.find();
    q.exec(function(err, webs) {
      res.render("compare", { websites: webs });
    });
  } else {
    res.render("login", { logedin: true });
  }
  // if (req.session.user) {
  //   res.render("compare", {websites: webs});
  // } else {
  //   res.render("login", { logedin: true });
  // }
};

module.exports.login = function(req, res) {
  if (req.session.user) {
    res.render("index");
  } else {
    res.render("login", { logedin: true });
  }
};

module.exports.loginuser = function(req, res) {
  var q = userSchema.find({ name: req.query.name });
  q.exec(function(err, data) {
    if (data.length == 0) {
      return res.send({ msg: "User not signed up", valid: false });
    } else if (data[0].pass != req.query.pass) {
      return res.send({ msg: "Invalid username or password", valid: false });
    } else {
      req.session.user = data[0];
      return res.send({ msg: data, valid: true, uname: req.query.name });
    }
  });
};

module.exports.get_websites = function(req, res) {
  var q = generalWebsitesSchema.find();
  if (req.session.user) {
    if (req.session.user.name === "admin") {
      q.exec(function(err, webs) {
        res.render("adminwebsites", { title: "Express", websites: webs });
      });
    } else {
      q.exec(function(err, webs) {
        res.render("websites", { title: "Express", websites: webs });
      });
    }
  } else {
    res.render("login", { logedin: true });
  }
};

module.exports.comparesites = function(req, res) {
  var q = schemaWebsite.find();
  if (req.session.user) {
    q.exec(function(err, webs) {
      res.send({ websites: webs });
    });
  } else {
    res.render("login", { logedin: true });
  }
};

module.exports.get_add_new_from = function(req, res) {
  return res.send({
    body:
      "<ul>" +
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
  var q = generalWebsitesSchema.find({ _id: req.params.id });
  q.exec(function(err, webs) {
    return res.send({ websites: webs });
  });
};

module.exports.get_websites_by_id_for_edit = function(req, res) {
  var q = generalWebsitesSchema.find({ _id: req.params.id });
  q.exec(function(err, webs) {
    return res.send({ websites: webs });
  });
};
module.exports.get_childsafety = function(req, res) {
  var q = schemaWebsite.aggregate([
    {
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
  var q = schemaWebsite.aggregate([
    {
      $match: { Privacy: "Excellent", country: "United States" }
    },
    {
      $group: { _id: "$country", total: { $sum: 1 } }
    }
  ]);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_all_us = function(req, res) {
  var q = schemaWebsite.aggregate([
    {
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
  var webData = new schemaWebsite(WebsiteData);
  webData.save(function(err, data) {
    if (err) {
      return res.send(500, { error: err });
    }
    return res.send({ msg: "inserted Successfully" });
  });
};

module.exports.comparewebsites = function(req, res) {
  var q = generalWebsitesSchema.find({
    $or: [{ _id: req.params.left }, { _id: req.params.right }]
  });
  q.exec(function(err, data) {
    console.log(data);
    res.send({webs: data});
  });
};

module.exports.edit_db_data_id = function(req, res) {
  var data = new schemaWebsite(req.body);
  var q = schemaWebsite.replaceOne({ _id: data._id }, data);
  q.exec(function(err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send({ msg: "succesfully saved" });
  });
};

module.exports.delete_DB = function(req, res) {
  var q = schemaWebsite.remove({ _id: req.params.id });
  q.exec(function(err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send({ msg: "deleted successfully" });
  });
};
module.exports.search_DB = function(req, res) {
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
  var q = eduWebsitesSchema
    .find(
      {},
      { Domain: 1, Unique_Users: 1, _id: 0 },
      { $sort: { Traffic_Share: -1 } }
    )
    .limit(5);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_allcategories_stackedchart = function(req, res) {
  var q = generalWebsitesSchema
    .find({}, { Domain: 1, Unique_Users: 1, _id: 0 })
    .sort({ Unique_Users: -1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_allcategories_bouncestack = function(req, res) {
  var q = generalWebsitesSchema.aggregate([
    {
      $match: {
        Domain: {
          $nin: ["google.com", "youtube.com", "facebook.com", "baidu.com"]
        }
      }
    },
    {
      $project: {
        Domain: 1,
        Avg_Month_Visits: 1,

        _id: 0,

        Bouncing_Visits: {
          $multiply: ["$Bounce_Rate", "$Avg_Month_Visits"]
        }
      }
    },
    { $sort: { Avg_Month_Visits: -1 } }
  ]);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_allcategories_stackedchart_mobdesk_all = function(req, res) {
  var q = generalWebsitesSchema
    .find({}, { Domain: 1, Desktop_Share: 1, Mobile_Share: 1, _id: 0 })
    .sort({ Traffic_Share: -1 });
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_edu_mobdesk = function(req, res) {
  var q = eduWebsitesSchema
    .find({}, { Domain: 1, Desktop_Share: 1, Mobile_Share: 1, _id: 0 })
    .sort({ Rank: 1 })
    .limit(10);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_allcategories_timetraffic_all = function(req, res) {
  var q = generalWebsitesSchema
    .find({}, { Domain: 1, Avg_Visit_Duration: 1, Pages_Per_Visit: 1, _id: 0 })
    .sort({ Pages_Per_Visit: -1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_allcategories_hightraffic_all = function(req, res) {
  var q = generalWebsitesSchema
    .aggregate([
      {
        $project: {
          Domain: 1,
          //                Traffic_Share: 1,
          _id: 0,

          traffic_percent: {
            $multiply: ["$Traffic_Share", 100]
          }
        }
      }
    ])
    .sort({ traffic_percent: -1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};
module.exports.get_allcategories_change_in_traffic = function(req, res) {
  var q = generalWebsitesSchema
    .aggregate([
      {
        $match: {
          $or: [
            { Domain: "facebook.com" },
            { Domain: "youtube.com" },
            { Domain: "instagram.com" },
            { Domain: "twitter.com" },
            { Domain: "reddit.com" },
            { Domain: "whatsapp.com" },
            { Domain: "pinterest.com" }
          ]
        }
      },
      {
        $project: {
          Domain: 1,
          _id: 0,

          increase_from_lastmonth: {
            $multiply: ["$Website_Change", 100]
          }
        }
      }
    ])
    .sort({ Avg_Month_Visits: -1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_allcategories_social_avg_monthly = function(req, res) {
  var q = generalWebsitesSchema
    .aggregate([
      {
        $match: {
          $or: [
            { Domain: "facebook.com" },
            { Domain: "youtube.com" },
            { Domain: "instagram.com" },
            { Domain: "twitter.com" },
            { Domain: "reddit.com" },
            { Domain: "whatsapp.com" },
            { Domain: "pinterest.com" }
          ]
        }
      },
      {
        $project: {
          Domain: 1,
          _id: 0,
          Avg_Month_Visits: 1
        }
      }
    ])
    .sort({ Avg_Month_Visits: -1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_bouncerate_edu = function(req, res) {
  var q = eduWebsitesSchema
    .find(
      {},
      {
        Domain: 1,
        Bounce_Rate: 1,
        _id: 0
      }
    )
    .sort({ Bounce_Rate: 1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_avg_monthly_visits = function(req, res) {
  var q = eduWebsitesSchema
    .find(
      {},
      {
        Domain: 1,
        Avg_Month_Visits: 1,
        _id: 0
      }
    )
    .sort({ Avg_Month_Visits: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_top_countries = function(req, res) {
  var q = schemaWebsite.aggregate([
    {
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
  console.log(req.session.user);
  if (req.session.user) {
    res.render("dashboard");
  } else {
    res.render("login", { logedin: true });
  }
};
module.exports.get_dashboardOld = function(req, res) {
  res.render("dashboardOld");
};
module.exports.get_allcategories = function(req, res) {
  console.log(req.session.user);
  if (req.session.user) {
    res.render("allcategories");
  } else {
    res.render("login", { logedin: true });
  }
};

module.exports.get_movies = function(req, res) {
  if (req.session.user) {
    res.render("movies");
  } else {
    res.render("login", { logedin: false });
  }
};

module.exports.get_traffic_share = function(req, res) {
  var q = moviesSchema
    .find(
      { Adsense: true },
      {
        Domain: 1,
        Traffic_Share: 1,
        _id: 0
      }
    )
    .sort({ Traffic_Share: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_bouncerate_movies = function(req, res) {
  var q = moviesSchema
    .find(
      {},
      {
        Domain: 1,
        Bounce_Rate: 1,
        _id: 0
      }
    )
    .sort({ Bounce_Rate: 1 })
    .limit(20);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_newuser_movies = function(req, res) {
  var q = moviesSchema
    .find({}, { Domain: 1, Unique_Users: 1, _id: 0 })
    .sort({ Unique_Users: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_website_change_movies = function(req, res) {
  var q = moviesSchema
    .find({}, { Domain: 1, Website_Change: 1, _id: 0 })
    .sort({ Website_Change: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_timespent = function(req, res) {
  //   var q = eduWebsitesSchema.find({}, { "Domain": 1, "Avg_Visit_Duration": 1, "Pages_Per_Visit": 1, "_id": 0 })
  var q = eduWebsitesSchema
    .find({}, { Avg_Visit_Duration: 1, Pages_Per_Visit: 1, _id: 0 })
    .sort({ Pages_Per_Visit: -1 })
    .limit(30);
  q.exec(function(err, webs) {
    return res.send({ webs: webs });
  });
};

// Common APIs
// start new user
module.exports.get_dashboard_newuser_movies = function(req, res) {
  var q = moviesSchema
    .find(
      {},
      { Domain: 1, Unique_Users: 1, _id: 0 },
      { $sort: { Traffic_Share: -1 } }
    )
    .limit(5);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_newuser_education = function(req, res) {
  var q = eduWebsitesSchema
    .find(
      {},
      { Domain: 1, Unique_Users: 1, _id: 0 },
      { $sort: { Traffic_Share: -1 } }
    )
    .limit(5);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_newuser_carrentals = function(req, res) {
  var q = carRentalsSchema
    .find(
      {},
      { Domain: 1, Unique_Users: 1, _id: 0 },
      { $sort: { Traffic_Share: -1 } }
    )
    .limit(5);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

// ------------ end new user ----------------

// mob desk //

module.exports.get_dashboard_mobdesk_movies = function(req, res) {
  var q = moviesSchema
    .find({}, { Domain: 1, Desktop_Share: 1, Mobile_Share: 1, _id: 0 })
    .sort({ Rank: 1 })
    .limit(10);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_mobdesk_education = function(req, res) {
  var q = eduWebsitesSchema
    .find({}, { Domain: 1, Desktop_Share: 1, Mobile_Share: 1, _id: 0 })
    .sort({ Rank: 1 })
    .limit(10);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_mobdesk_carrentals = function(req, res) {
  var q = carRentalsSchema
    .find({}, { Domain: 1, Desktop_Share: 1, Mobile_Share: 1, _id: 0 })
    .sort({ Rank: 1 })
    .limit(10);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

// -------------------- end mob desk ------------------

// start avg monthly visits

module.exports.get_dashboard_avg_monthly_visits_movies = function(req, res) {
  var q = moviesSchema
    .find(
      {},
      {
        Domain: 1,
        Avg_Month_Visits: 1,
        _id: 0
      }
    )
    .sort({ Avg_Month_Visits: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_avg_monthly_visits_education = function(req, res) {
  var q = eduWebsitesSchema
    .find(
      {},
      {
        Domain: 1,
        Avg_Month_Visits: 1,
        _id: 0
      }
    )
    .sort({ Avg_Month_Visits: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_avg_monthly_visits_carrentals = function(
  req,
  res
) {
  var q = carRentalsSchema
    .find(
      {},
      {
        Domain: 1,
        Avg_Month_Visits: 1,
        _id: 0
      }
    )
    .sort({ Avg_Month_Visits: -1 })
    .limit(10);
  q.exec(function(err, webs) {
    //console.log(webs);
    return res.send({ webs: webs });
  });
};

// ------------------- end of avg monthly visits ---------------------

// timespent --

module.exports.get_dashboard_timespent_movies = function(req, res) {
  //   var q = eduWebsitesSchema.find({}, { "Domain": 1, "Avg_Visit_Duration": 1, "Pages_Per_Visit": 1, "_id": 0 })
  var q = moviesSchema
    .find({}, { Avg_Visit_Duration: 1, Pages_Per_Visit: 1, _id: 0 })
    .sort({ Pages_Per_Visit: -1 })
    .limit(30);
  q.exec(function(err, webs) {
    console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_timespent_education = function(req, res) {
  //   var q = eduWebsitesSchema.find({}, { "Domain": 1, "Avg_Visit_Duration": 1, "Pages_Per_Visit": 1, "_id": 0 })
  var q = eduWebsitesSchema
    .find({}, { Avg_Visit_Duration: 1, Pages_Per_Visit: 1, _id: 0 })
    .sort({ Pages_Per_Visit: -1 })
    .limit(30);
  q.exec(function(err, webs) {
    console.log(webs);
    return res.send({ webs: webs });
  });
};

module.exports.get_dashboard_timespent_carrentals = function(req, res) {
  //   var q = eduWebsitesSchema.find({}, { "Domain": 1, "Avg_Visit_Duration": 1, "Pages_Per_Visit": 1, "_id": 0 })
  var q = carRentalsSchema
    .find({}, { Avg_Visit_Duration: 1, Pages_Per_Visit: 1, _id: 0 })
    .sort({ Pages_Per_Visit: -1 })
    .limit(30);
  q.exec(function(err, webs) {
    console.log(webs);
    return res.send({ webs: webs });
  });
};
// ------------------- end of timespent ------------
