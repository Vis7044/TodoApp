const express = require('express')
const mongoose = require('mongoose')

const app = express();

const router = express.Router();
const userModel = require('../models/userModel');


//create Data
router.post('/save',(req,res,next)=>{
    
    userModel.create({
        title: req.body.title
    }).then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(400).json({Message: error.message})

    }) 
   
});

//fetch all data
router.get('/get',(req,res,next) => {
    userModel.find()
    .then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(400).json({Message: error.message})
    }) 
});

//fetch single data
router.get('/getSingle/:id',(req,res,next) => {
    const {id} = req.params;
    userModel.findById({_id:id})
    .then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(400).json({Message: error.message})
    }) 
});

//Update data
router.put('/update/:id',(req,res,next) => {
    const {id} = req.params;
    userModel.findByIdAndUpdate(id, req.body,{
        new: true
    })
    .then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(400).json({Message: error.message})
    }) 
});

//Delete data
router.delete('/delete/:id',(req,res,next) => {
    const {id} = req.params;
    userModel.findByIdAndDelete({_id:id})
    .then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(400).json({Message: error.message})
    }) 
});






module.exports = router;