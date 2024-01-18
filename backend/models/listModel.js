const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    },
    userRef: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('List',listSchema);