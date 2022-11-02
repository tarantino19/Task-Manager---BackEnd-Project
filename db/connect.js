const mongoose = require ('mongoose')



const connectDB = (url) => {
    return mongoose.connect (url, {
        useNewUrlParser:  true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}
//returning a promise

//this below was connected to mongoose.connect for testing
// .then (() => console.log('connected to the db...'))
// .catch ((error) => console.log(error));


module.exports = connectDB