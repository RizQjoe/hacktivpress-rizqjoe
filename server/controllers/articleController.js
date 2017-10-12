'use strict'

const Article = require('../model/Article')

function getAllArticle(req,res){
    Article.find()
    .populate('author', 'username_id' )
    .then(response =>{
        res.send(response)
    })
    .catch(err =>{
        res.send(err)
    })
}

function getOneArticle(req,res){
    Article.findById(req.params.id)
    .then(response => {
        res.send(response)
    })
    .catch(err =>{
        res.send(err)
    })
}

function postArticle (req,res){
    Article.create({
        title: req.body.title,
        content:req.body.content,
        category: req.body.category,
        author: req.body.author
    })
    .then(response => {
        res.send(response)
    })
    .catch(err =>{
        res.send(err)
    })
}

function editArticle(req, res){
    Article.where({
        _id:req.params.id
    })
    .update({
        title: req.body.title,
        content: req.body.content,
        category:req.body.category
    })
    .then(response =>{
        res.send(response)
    })
    .catch(err =>{
        res.send(err)
    })
}

function delteArticle(req, res){
    Article.delteOne({
        _id:req.params.id
    })
    .then(response =>{
        res.send(response)
    })
    .catch(err =>{
        res.send(err)
    })
}
