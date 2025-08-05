const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username:{unique:true, type: String},
    email:{unique:true,
        required:true,
        type:String,
        match: /^\S+@\S+\.\S+$/
    },
    password:{
        type:String,
        required:true,
        //no need for validation, as it will encrypt it, add validation to api
    },
    userType:{
        type:String,
        required:true,
    }
},
{versionKey: false
})

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;