const mongoose = require('mongoose');
const schemaWebsite = mongoose.Schema({
    Country_Rank:{
        type:Number
    }, 
    Website: {
        type: String
    }, 
    Trustworthiness: {
        type: String
    },
    Avg_Daily_Visitors : {
        type: Number
    },
    Child_Safety : {
        type: String
    },
    Avg_Daily_Pageviews : {
        type: Number
    },
    Privacy : {
        type: String
    },
    Facebook_likes : {
        type: Number
    },
    Twitter_mentions : {
        type: Number
    }, 
    Google_Pluses : {
        type: Number
    },
    Linkedin_Links : {
        type: Number
    },
    Pinterest_Pins : {
        type: Number
    },
    Traffic_rank : {
        type: Number
    },
    Daily_Pageviews_per_user :  {
        type: Number
    }, 
    Location: {
        type: String
    },
    Hosted_by : {
        type: String
    },
    country: {
        type: String
    }
});
const Website = module.exports = mongoose.model('websites',schemaWebsite);
