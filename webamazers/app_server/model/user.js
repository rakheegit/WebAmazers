var mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type: String},
    pass:{type: String},
    pref:{type:[String]}
})
const User = module.exports = mongoose.model('users',userSchema);
