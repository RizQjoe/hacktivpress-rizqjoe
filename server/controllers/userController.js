'use strict'

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/auth')

function register(req, res) {
    const key = helper.randomKey();
    const pass = helper.hash(req.body.password, key)
    User.create({
        username: req.body.username,
        password: pass,
        key: key
    })
    .then(response =>{
        res.send(response)
    })
    .catch(err => {
        res.send(err)
    })
}

function login(req, res){
    User.findOne({
        username: req.body.username
    })
    .then(response =>{
        let key = response.key
        let pass = helper.hash(req.body.password, key)
        
        // kondisi jika password dan user Name benar dan salah
        if(response.password == pass){
            let token = jwt.sign({
                id: response._id,
                username: response.username
            }, 'AssFF9')
            req.headers.token = token
            res.json({
                token: token,
                id: response._id,
                username: response.username
            })
        }else {
            res.send('Wrong password ')
        }
    })
    .catch(err =>{
        res.send('User Not Found')
    })
}

module.exports = {
    register,
    login
    
}