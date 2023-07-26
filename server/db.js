const mongoose = require ('mongoose');

function connectDB () {
    mongoose.connect('mongodb+srv://weissenborn24seb:BMHxCDtYBSAYChJK@sw-mangodb.hltjnmb.mongodb.net/auth-protected-routes',
    {useUnifiedTopology: true, useNewUrlParser: true}
  )

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('line:100, Mongo DB Connection Successfull');
    })

    connection.on('error', () => {
        console.log('line:200, Mongo DB Connection Error')
    })

}

connectDB()

module.exports = mongoose
