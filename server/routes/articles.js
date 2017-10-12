'use strict'

const express = require ('express')
const router = express.Router()
const middleware = require('../helpers/auth')
const controller = require('../controllers/articleController')

router.get('/', controller.getAllArticle)
router.get('/:id', controller.getOneArticle)
router.post('/',controller.postArticle)
router.delete('/:id', middleware.auth, controller.delteArticle)
router.put('/:id', middleware.auth, controller.editArticle)
router.get('/category/:category', controller.getByAuthor)

module.exports = router;