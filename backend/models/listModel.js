const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    }
});


module.exports = mongoose.model('List',listSchema);