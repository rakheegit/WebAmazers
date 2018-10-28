const mongoose = require('mongoose');
const schemaWebsite = mongoose.Schema({
    Country_Rank:{
        type:String
    }, 
    Website: {
        type: String
    }, 
    Trustworthiness: {
        type: String
    },
    Avg_Daily_Visitors : {
        type: String
    },
    Child_Safety : {
        type: String
    },
    Avg_Daily_Pageviews : {
        type: String
    },
    Privacy : {
        type: String
    },
    Facebook_likes : {
        type: String
    },
    Twitter_mentions : {
        type: String
    }, 
    Google_pluses : {
        type: String
    },
    LinkedIn_mentions : {
        type: String
    },
    Pinterest_pins : {
        type: String
    },
    StumbleUpon_views : {
        type: String
    },
    Status :{
        type: String
    },
    Traffic_Rank : {
        type: String
    },
    Reach_Day : {
        type: Number
    },
    Month_Average_Daily_Reach : {
        type: Number
    }, 
    Daily_Pageviews :  {
        type: Number
    }, 
    Month_Average_Daily_Pageviews :  {
        type: Number
    }, 
    Daily_Pageviews_per_user :  {
        type: Number
    }, 
    Reach_Day_percentage:  {
        type: Number
    }, 
    Month_Average_Daily_Reach_percentage:  {
        type: Number
    }, 
    Daily_Pageviews_percentage :  {
        type: Number
    }, 
    Month_Average_Daily_Pageviews_percentage:  {
        type: Number
    }, 
    Daily_Pageviews_per_user_percentage: {
        type: String
    }, 
    Location: {
        type: String
    },
    Hosted_by : {
        type: String
    },
    Subnetworks: {
        type: String
    },
    Registrant : {
        type: String
    },
    Registrar: {
        type: String
    },
    country: {
        type: String
    }
});
const Website = module.exports = mongoose.model('websites',schemaWebsite);
