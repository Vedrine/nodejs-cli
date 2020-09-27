#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    listCustomers,
    deleteCustomer
} = require('./index');


// VERSION
program
    .version('1.0.0')
    .description('Client management system');


// QUESTIONS
const questions = [
    {
        type: 'imput',
        name: 'firstname',
        message: 'Customer first name'
    },
    {
        type: 'imput',
        name: 'lastname',
        message: 'Customer last name'
    },
    {
        type: 'imput',
        name: 'phone',
        message: 'Customer phone number'
    },
    {
        type: 'imput',
        name: 'email',
        message: 'Customer email'
    }
]


// ADD
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers));
    });


// FIND
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => {
        findCustomer({name});
     });


// UPDATE
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action(_id => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    });


// DELETE
program
    .command('delete <name>')
    .alias('d')
    .description('Delete a customer')
    .action(_id => {
        deleteCustomer(_id);
     });


// LIST
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(() => listCustomers());


program.parse(process.argv);