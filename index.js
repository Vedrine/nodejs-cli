const mongoose = require('mongoose');

// GLOBAL PROMISE MAPPING
mongoose.Promise = global.Promise;

// DB ACCESS
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// IMPORT MODEL
const Customer = require('./models/customer');

// ADD CUSTOMER
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New customer added');
        db.close;
    });
}


// FIND CUSTOMER
const findCustomer = (name) => {
    // CASE INSENSITIVE
    const search = new RegExp(name.name, 'i');
   
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);;
            db.close;
        });
}


// UPDATE CUSTOMER
const updateCustomer = (_id, customer) => {
    Customer.updateOne({_id}, customer)
    .then(customer => {
        console.info('Customer updated');
        console.info(customer);
        db.close;
    });
}


// DELETE CUSTOMER
const deleteCustomer = (_id) => {
    Customer.deleteOne({_id})
    .then(customer => {
        console.info('Customer deleted');
        db.close;
    });
}


// LIST ALL CUSTOMERS
const listCustomers = () => {
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} customers`);
        db.close;
    });
}


// EXPORT METHODS
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer,
    listCustomers
}