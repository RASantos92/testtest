const mongoose = require("mongoose"); 
const Author = require("../models/authors.models"); 



module.exports = {
    create: (req,res) => {
        Author.create(req.body) 
        .then(item => {
            console.log(item);
            res.json(item);
        })
        .catch(err=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
    findAll: (req,res) => {
        Author.find() 
        .then(authors => res.json(authors))
        .catch(err=> res.status(400).json(err))
    },
    findOne: (req,res) => {
        Author.findOne({_id: req.params.id}) 
        .then(authors => res.json(authors))
        .catch(err=>res.status(400).json(err))
    },
    update: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}) 
        .then(authors => res.json(authors))
        .catch(err=>res.status(400).json(err))
    },
    delete: (req,res) => {
        Author.deleteOne({_id: req.params.id}) 
        .then(success => res.json(success))
        .catch(err=> res.status(400).json(err))
    }

}