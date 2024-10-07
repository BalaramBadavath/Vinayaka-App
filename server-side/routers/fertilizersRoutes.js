const express = require('express')
const router = express.Router()
const Fertilizers = require('./../models/Fertilizers')

router.get('/', async (req,res)=>{
    try{
        const response = await Fertilizers.find()
        res.status(2000).json(response)
    }   
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Error fetching data'})
    }
})

router.post('/', async (req,res)=>{
    try{
        const data = req.body
        const newData = new Fertilizers(data)
        const response = await newData.save()
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})