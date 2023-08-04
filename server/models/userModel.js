// const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true },
//     // roleNew : {type:String, required: true},
// })

// const userModel = mongoose.model('users', userSchema)

// module.exports = userModel


const mongoose = require('mongoose');




const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user email address"]
    },

    // role: {
    //     type: String,
    //     required: [true, "Please add the user role"],
    //     unique: [true, "Pick Admin or User"],
    // },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
    email: {
        type: String,
        required: [true, "Please add the user email"],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);