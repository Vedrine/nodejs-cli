const mongoose = require('mongoose');

// CUSTOMER SCHEMA
const customerSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: String},
    email: {type: String}
});


// EXPORT
module.exports = mongoose.model('Customer', customerSchema);