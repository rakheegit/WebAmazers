const mongoose = require('mongoose');
const schemaWebsite = mongoose.Schema({
    Domain:{
        type:String
    }, 
    Traffic_Share: {
        type: Number
    }, 
    Rank: {
        type: Number
    },
    Bounce_Rate : {
        type: Number
    },
    Pages_Per_Visit : {
        type: Number
    },
    Unique_Visitors : {
        type: Number
    },
    Avg_Month_Visits : {
        type: Number
    },
    Mobile_Share : {
        type: Number
    },
    Avg_Visit_Duration : {
        type: Number
    }, 
    Website_Change : {
        type: Number
    },
    Icon_Url : {
        type: String
    },
    Adsense : {
        type: Boolean
    },
    Unique_Users : {
        type: Number
    }
});
exports.allWebsitesSchema = mongoose.model('all_websites',schemaWebsite);
exports.carRentalsSchema = mongoose.model('car_rentals',schemaWebsite);
exports.educationSchema = mongoose.model('education_websites',schemaWebsite);
exports.moviesSchema = mongoose.model('movies',schemaWebsite);
exports.restaurantsSchema = mongoose.model('restaurants',schemaWebsite);

