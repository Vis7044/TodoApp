const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserShema = new Schema({
    
});


module.exports = mongoose.model('User',UserShema);