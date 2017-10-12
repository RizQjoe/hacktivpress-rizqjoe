'use strict'

const mongoose = require('mongose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;