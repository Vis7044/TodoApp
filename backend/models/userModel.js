const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserShema = new Schema({
    username: {
        type: String,
        required: [true, 'Enter a username'],
        unique: [true, 'username is already registered']
    },
    email: {
        type: String,
        required: [true, 'Please Provide an email'],
        unique: [true, 'Email is already registered'],

    },
    password: {
        type: String,
        required: [true, 'Enter the password']
    },
    todo: [{
        type: Schema.Types.ObjectId,
        ref: 'List'
    }]
});


module.exports = mongoose.model('User',UserShema);