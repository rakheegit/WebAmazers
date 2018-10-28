var mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type: String},
    password:{type: String},
    email:{type:String}
})
const User = module.exports = mongoose.model('users',userSchema);
