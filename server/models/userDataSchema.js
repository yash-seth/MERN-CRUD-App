var mongoose = require('mongoose');

const userDataSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    dob:{
        type:String
    }
});

const userData = new mongoose.model('userData',userDataSchema);

module.exports = userData;